import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, pipe} from 'rxjs';
import {Trainer} from "./models/trainer";
import {Image} from "./models/image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ModelService {

    private baseUrl = 'http://hotel/admin/api/';

    constructor(private http: HttpClient) {
    }


    //trainers

    public getTrainers(): Observable<Trainer[]> {
        return this.getModelListing<Trainer>(Trainer.getApiMethodName());
    }

    public saveTrainer(trainer: Trainer) {
        return this.http.put(this.baseUrl + Trainer.getApiMethodName() + '/' + trainer.id, trainer.forSave())
            .subscribe();
    }

    public deleteTrainer(trainer: Trainer) {
        return this.http.delete(this.baseUrl + Trainer.getApiMethodName() + '/' + trainer.id);
    }

    public createTrainer(trainer: Trainer): Observable<Object> {
        return this.http.post<Trainer>(this.baseUrl + Trainer.getApiMethodName(), trainer, httpOptions);
    }

    //images

    public getImages(): Observable<Image[]> {
        return this.getModelListing<Image>(Image.getApiMethodName());
    }

    public saveImage(image: Image) {
        return this.http.put(this.baseUrl + Trainer.getApiMethodName() + '/' + image.id, image)
            .subscribe();
    }

    public deleteImage(image: Image) {
        return this.http.delete(this.baseUrl + Image.getApiMethodName() + '/' + image.id);
    }

    public createImage(image: ReadFile, callback: Function) {
        return this.http.post(this.baseUrl + Image.getApiMethodName(), {
            content: image.content,
            filename: image.name
        }, httpOptions)
            .subscribe(response => {
                if (callback instanceof Function) {
                    callback(response);
                }
            });
    }

    public updateImage(imageData: ReadFile, image: Image, callback: Function) {
        return this.http.put(this.baseUrl + Image.getApiMethodName() + '/' + image.id, {
            content: imageData.content,
            filename: imageData.name
        }, httpOptions)
            .subscribe(response => {
                if (callback instanceof Function) {
                    callback(response);
                }
            });
    }

    //common

    private getModelListing<T>(apiMethod: string): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl + apiMethod);
    }

    private static getFormUrlEncoded(toConvert) {
        return JSON.parse(JSON.stringify(toConvert));
    }
}