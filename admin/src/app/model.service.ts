import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {Observable, Subject, pipe} from 'rxjs';
import { Observable as ObservableInt} from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import {Trainer} from "./models/trainer";
import {CmsImage} from "./models/cms-image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";
import {Room} from "./models/room";
import {LanguageService} from "./services/language.service";
import {ImageType} from "./models/image-type";
import {ImageFilters} from "./models/image-filters";
import {ImageFilter} from "./models/image-filter";
import {HttpParamsOptions} from "@angular/common/http/src/params";
import {SelectItemEvent} from "./models/select-item-event";
import {SelectItemService} from "./select-item.service";
import {TrainingActivity} from "./models/training-activity";
import {TrainingActivityType} from "./models/training-activity-type";
import {RestaurantMenu} from "./models/restaurant-menu";

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
        private languageService: LanguageService,
        private selectItemService: SelectItemService
    ) {
        Trainer.setupLanguageService(this.languageService);
        TrainingActivity.setupLanguageService(this.languageService);
        TrainingActivityType.setupLanguageService(this.languageService);
        RestaurantMenu.setupLanguageService(this.languageService);
        Room.setupLanguageService(this.languageService);
        CmsImage.setupLanguageService(this.languageService);
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

    public reorderApplyByN(modelName: string, modelList: any[]) {
        let order = {};

        for (let item of modelList) {
            let id = item['id'];
            order[id] = item['n'];
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
        return this.http.delete(this.baseUrl + Trainer.getApiMethodName(trainer.id));
    }

    public createTrainer(trainer: Trainer): Observable<Object> {
        return this.http.post<Trainer>(this.baseUrl + Trainer.getApiMethodName(), trainer, httpOptions);
    }

    // image filters

    public getImageFilters(): Observable<ImageFilters> {
        return this.http.get<ImageFilters>(this.baseUrl + ImageFilters.getApiMethodName());
    }


    //images

    public getRoomImages(room: Room): Observable<CmsImage[]> | null {
        let images = [];
        let tasks$ = [];

        room.image_ids.split(',').forEach((idStr) => {
            let id = parseInt(idStr);
            if (id) {
                tasks$.push(this.getImage(id));
            }
        });

        return tasks$.length ? ObservableInt.forkJoin(tasks$) : null;
    }


    public getImages(filter: ImageFilter|null = null): Observable<CmsImage[]> {

        let options = {};

        if (filter !== null) {
            let params = {
                selectedType : filter.selectedType ? filter.selectedType.id : '',
                tags : filter.selectedTags.join(',')
            };
            const httpParams: HttpParamsOptions = { fromObject: params as HttpParamsOptions } as HttpParamsOptions;
            options = { params: new HttpParams(httpParams) };
        }

        return this.http.get<CmsImage[]>(this.baseUrl + CmsImage.getApiMethodName(), options);
    }

    public getImage(id: number): Observable<CmsImage> {
        return this.http.get<CmsImage>(this.baseUrl + CmsImage.getApiMethodName(id));
    }


    public saveImage(image: any, data: ReadFile|null, callback?: Function) {
        image.beforeSave();

        if (data !== null) {
            image.data = data;
        }

        return this.http.put(this.baseUrl + CmsImage.getApiMethodName(image.id), image)
            .subscribe((data: CmsImage) => {
                this.selectItemService.emitEventOfType(SelectItemEvent.Type.RefreshTags);
                if (callback instanceof Function) {
                    callback(data);
                }
        });
    }

    public deleteImage(image: CmsImage) {
        return this.http.delete(this.baseUrl + CmsImage.getApiMethodName(image.id));
    }

    public createImage(image: ReadFile, filter: ImageFilter|null, callback: Function) {
        return this.http.post(this.baseUrl + CmsImage.getApiMethodName(), {
            content: image.content,
            filename: image.name,
            filter: filter
        }, httpOptions)
            .subscribe(response => {
                if (callback instanceof Function) {
                    callback(response);
                }
            });
    }

    public updateImage(imageData: ReadFile, image: CmsImage, callback: Function) {
        return this.http.put(this.baseUrl + CmsImage.getApiMethodName(image.id), {
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

    // training activity types
    public getTrainingActivityTypes()  {
        return this.getModelListing<TrainingActivityType>(TrainingActivityType.getApiMethodName());
    }

    public createTrainingActivityType(trainingActivityType: TrainingActivityType)  {
        return this.http.post<TrainingActivityType>(this.baseUrl + TrainingActivityType.getApiMethodName(), trainingActivityType, httpOptions);
    }

    public updateTrainingActivityType(trainingActivityType: TrainingActivityType)  {
        return this.http.put<TrainingActivityType>(this.baseUrl + TrainingActivityType.getApiMethodName(trainingActivityType.id), trainingActivityType);
    }

    public deleteTrainingActivityType(trainingActivityType: TrainingActivityType)  {
        return this.http.delete<TrainingActivityType>(this.baseUrl + TrainingActivityType.getApiMethodName(trainingActivityType.id));
    }

    // training activities
    public getTrainingActivitiesByType(typeId: number)  {
        return this.getModelListing<TrainingActivity>(TrainingActivity.getApiMethodName(null, new Map().set('type_id', typeId)));
    }

    public createTrainingActivity(trainingActivity: TrainingActivity)  {
        return this.http.post<TrainingActivity>(this.baseUrl + TrainingActivity.getApiMethodName(), trainingActivity, httpOptions);
    }

    public updateTrainingActivity(trainingActivity: TrainingActivity)  {
        return this.http.put<TrainingActivity>(this.baseUrl + TrainingActivity.getApiMethodName(trainingActivity.id), trainingActivity);
    }

    public deleteTrainingActivity(trainingActivity: TrainingActivity)  {
        return this.http.delete<TrainingActivity>(this.baseUrl + TrainingActivity.getApiMethodName(trainingActivity.id));
    }

    // menu
    public getRestaurantMenu()  {
        return this.getModelListing<RestaurantMenu>(RestaurantMenu.getApiMethodName());
    }

    public deleteRestaurantMenuItem(item: RestaurantMenu)  {
        return this.http.delete<RestaurantMenu>(this.baseUrl + RestaurantMenu.getApiMethodName(item.id));
    }

    public updateRestaurantMenuItem(item: RestaurantMenu)  {
        return this.http.put<RestaurantMenu>(this.baseUrl + RestaurantMenu.getApiMethodName(item.id), item);
    }

    public deleteRestaurantMenuCategory(catTitle: string)  {
        return this.http.delete<RestaurantMenu>(this.baseUrl + RestaurantMenu.getApiBulkMethodName('delete', new Map().set('catTitle', catTitle)));
    }

    public renameRestaurantMenuCategory(catTitle: string, newTitle: string)  {
        return this.http.put<RestaurantMenu>(this.baseUrl + RestaurantMenu.getApiBulkMethodName('rename', new Map().set('catTitle', catTitle)), {
            oldTitle: catTitle,
            newTitle: newTitle
        });
    }

    public createRestaurantMenuItem(item: RestaurantMenu)  {
        return this.http.post<RestaurantMenu>(this.baseUrl + RestaurantMenu.getApiMethodName(item.id), item, httpOptions);
    }

    //common

    private getModelListing<T>(apiMethod: string): Observable<T[]> {
        return this.http.get<T[]>(this.baseUrl + apiMethod);
    }

    private static getFormUrlEncoded(toConvert) {
        return JSON.parse(JSON.stringify(toConvert));
    }
}