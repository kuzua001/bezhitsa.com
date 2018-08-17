import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, Subject, pipe} from 'rxjs';
import {Trainer} from "./models/trainer";
import {CmsImage} from "./models/cms-image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";
import {Room} from "./models/room";
import {LanguageService} from "./services/language.service";
import {ImageType} from "./models/image-type";

const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

@Injectable()
export class ModelService {

    private baseUrl = '/api/';

    constructor(
        private http: HttpClient,
        private languageService: LanguageService
    ) {
        Trainer.setupLanguageService(this.languageService);
        Room.setupLanguageService(this.languageService);
    }

    public reorderApply(modelName: string, modelList: any[])
    {
        let order = {};
        let n = 1;

        for (let item of modelList) {
            let id = item['id'];
            order[id] = n;
            n ++;
        }

        return this.http.post(this.baseUrl + 'reorder?model=' + modelName, {order: order}, httpOptions)
            .subscribe();
    }


    //rooms

    public getRooms(): Observable<Room[]> {
        return this.getModelListing<Room>(Room.getApiMethodName());
    }

    public saveRoom(room: Room) {
        return this.http.put(this.baseUrl + Room.getApiMethodName(room.id), room.forSave())
            .subscribe();
    }

    public deleteRoom(room: Room) {
        return this.http.delete(this.baseUrl + Room.getApiMethodName(room.id));
    }

    public createRoom(room: Room): Observable<Object> {
        return this.http.post<Room>(this.baseUrl + Room.getApiMethodName(), room, httpOptions);
    }

    //trainers

    public getTrainers(): Observable<Trainer[]> {
        return this.getModelListing<Trainer>(Trainer.getApiMethodName());
    }

    public saveTrainer(trainer: Trainer) {
        return this.http.put(this.baseUrl + Trainer.getApiMethodName(trainer.id), trainer.forSave())
            .subscribe();
    }

    public deleteTrainer(trainer: Trainer) {
        return this.http.delete(this.baseUrl + Trainer.getApiMethodName() + '/' + trainer.id);
    }

    public createTrainer(trainer: Trainer): Observable<Object> {
        return this.http.post<Trainer>(this.baseUrl + Trainer.getApiMethodName(), trainer, httpOptions);
    }

    //images

    public getImages(): Observable<CmsImage[]> {
        return this.getModelListing<CmsImage>(CmsImage.getApiMethodName());
    }

    public getImage(id: number): Observable<CmsImage> {
        return this.http.get<CmsImage>(this.baseUrl + CmsImage.getApiMethodName(id));
    }


    public saveImage(image: CmsImage) {
        image.beforeSave();
        return this.http.put(this.baseUrl + CmsImage.getApiMethodName() + '/' + image.id, image)
            .subscribe();
    }

    public deleteImage(image: CmsImage) {
        return this.http.delete(this.baseUrl + CmsImage.getApiMethodName() + '/' + image.id);
    }

    public createImage(image: ReadFile, callback: Function) {
        return this.http.post(this.baseUrl + CmsImage.getApiMethodName(), {
            content: image.content,
            filename: image.name
        }, httpOptions)
            .subscribe(response => {
                if (callback instanceof Function) {
                    callback(response);
                }
            });
    }

    public updateImage(imageData: ReadFile, image: CmsImage, callback: Function) {
        return this.http.put(this.baseUrl + CmsImage.getApiMethodName() + '/' + image.id, {
            content: imageData.content,
            filename: imageData.name
        }, httpOptions)
            .subscribe(response => {
                if (callback instanceof Function) {
                    callback(response);
                }
            });
    }

    // image types
    public getImageTypes()  {
        return this.getModelListing<ImageType>(ImageType.getApiMethodName());
    }

    //common

    private getModelListing<T>(apiMethod: string): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl + apiMethod);
    }

    private static getFormUrlEncoded(toConvert) {
        return JSON.parse(JSON.stringify(toConvert));
    }
}