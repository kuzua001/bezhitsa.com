import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {Router} from "@angular/router";

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    constructor(private http: HttpClient, private router: Router) { }

    private baseUrl = '/api';

    public isAuthenticated()
    {
        return !!localStorage.getItem('userName');
    }

    public getUserName()
    {
        return localStorage.getItem('userName');
    }


    private cleanUserDataAnddRedirect()
    {
        localStorage.removeItem('userName');
        localStorage.removeItem('userEmail');
        this.router.navigateByUrl(
            this.router.createUrlTree(
                ['/login']
            )
        );

    }

    public checkAuth()
    {
       /* this.http.get<any>(`${this.baseUrl}/auth`, {})
            .subscribe(authData => {
                // login successful if there's a jwt token in the response
                if (authData.status === 'success' && authData.auth === false) {
                    this.cleanUserDataAnddRedirect();
                }
            });*/
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.baseUrl}/login`, { username, password })
            .pipe(map(authData => {
                // login successful if there's a jwt token in the response
                if (authData.status === 'success' && authData.auth === true) {
                    localStorage.setItem('userName', authData.userName);
                    localStorage.setItem('userEmail', authData.userEmail);
                }

                return authData;
            }));
    }

    logout() {
        return this.http.post<any>(`${this.baseUrl}/logout`, {})
            .subscribe(() => {
                this.cleanUserDataAnddRedirect();
            });
    }
}