import {CanActivate, Router} from '@angular/router';
import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {AuthenticationService} from "./authentication.service";

@Injectable()
export class NeedAuthGuard implements CanActivate {

    constructor(private auth: AuthenticationService, private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

        const redirectUrl = route['_routerState']['url'];

        if (this.auth.isAuthenticated()) {
            return true;
        }

        this.router.navigateByUrl(
            this.router.createUrlTree(
                ['/login'], {
                    queryParams: {
                        redirectUrl
                    }
                }
            )
        );

        return false;
    }
}