import {Component, EventEmitter, Input, OnChanges, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SelectItemService} from "../select-item.service";
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {TrainingActivityType} from "../models/training-activity-type";
import {TrainingActivity} from "../models/training-activity";
import {SelectItemEvent} from "../models/select-item-event";
import * as $ from 'jquery';
import {AppModule} from "../app.module";

@Component({
    selector: 'trainings-editor',
    templateUrl: './trainings-editor.component.html',
    styleUrls: ['../common/object-editor.component.css', './trainings-editor.component.css'],
})
export class TrainingsEditorComponent implements OnChanges {

    @Input()
    activityType: TrainingActivityType | null = null;

    @ViewChild('confirmDelete')
    confirmDelete: TemplateRef<any>;

    private currentEditingId = 0;
    private modalRef: BsModalRef;
    private activities: TrainingActivity[] | null = null;
    private newActivity: TrainingActivity | null = null;
    public autofocus = new EventEmitter<boolean>(true);
    public editorOptions = AppModule.editorOptions;

    constructor(private selectItemService: SelectItemService,
                private modelService: ModelService,
                private modalService: BsModalService) {
        this.autofocus.emit(true);

        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.reloadComponentState();
            }
        });

        this.editorOptions.btns = [
            ['strong', 'em', 'del'],
            ['link'],
            ['justifyLeft', 'justifyCenter', 'justifyRight', 'justifyFull'],
            ['unorderedList', 'orderedList'],
        ];
    }

    public deleteWithConfirm()
    {
        this.showPopup(this.confirmDelete);
    }

    public delete()
    {
        this.modelService.deleteTrainingActivityType(this.activityType)
            .subscribe(() => {
                this.selectItemService.emitEventOfType(SelectItemEvent.Type.TrainingItemTypeRemove, {
                    activityTypeId: this.activityType.id
                });
                this.closePopup();
            });
    }

    public save()
    {
        this.modelService.updateTrainingActivityType(this.activityType)
            .subscribe();
    }

    public setColor(color)
    {
        if (this.activityType) {
            this.activityType.color = color;
        }
    }


    public leaveField(fieldName: string, activity = null)
    {
        this.checkFields(activity);
    }

    public createEditingCard()
    {
        this.newActivity = new TrainingActivity();
        this.newActivity.type_id = this.activityType.id;
        this.makeAutofocus();
    }

    public showPopup(target: TemplateRef<any>)
    {
        this.modalRef = this.modalService.show(target);
    }

    public closePopup()
    {
        this.modalRef.hide();
    }

    public isReady()
    {
        return this.activities !== null;
    }

    public ngOnChanges()
    {
        this.reloadComponentState();
    }

    public closeNewActivity()
    {
        this.newActivity = null;
    }

    public closeEditor()
    {
        this.currentEditingId = 0;
    }

    public isEditing(activity)
    {
        return this.currentEditingId === activity.id;
    }

    public initEditingCard(activity: TrainingActivity)
    {
        this.currentEditingId = activity.id;
        this.closeNewActivity();
        this.makeAutofocus();
    }

    public removeActivity(activity: TrainingActivity) {
        this.modelService
            .deleteTrainingActivity(activity)
            .subscribe(() => {
                this.activities = this.activities.filter(a => a.id !== activity.id);
            });
    }

    public isCreatingNew()
    {
        return this.newActivity !== null;
    }

    public createNew()
    {
        this.modelService.createTrainingActivity(this.newActivity)
            .subscribe((activity) => {
                this.activities.push(activity);
                this.closeNewActivity();
            });
    }

    private reloadComponentState()
    {
        if (this.activityType !== null) {
            this.initActivitiesList();
        }
    }

    private makeAutofocus()
    {
        setTimeout(() => {
            this.autofocus.emit(true);
        }, 10);
    }

    private checkFields(activity)
    {
        setTimeout(() => {
            let count = $('[class*=activity-' + activity.id + '] input:focus').length +
                $('[class*=activity-' + activity.id + '] textarea:focus').length;
            if (count === 0) {
                this.applyEditingCard(activity);
            }
        }, 20);
    }

    private applyEditingCard(activity)
    {
        if (activity.title && activity.description) {
            this.modelService.updateTrainingActivity(activity)
                .subscribe((activity) => {
                    this.closeEditor();
                });
        } else {
            this.closeEditor();
        }
    }

    private initActivitiesList()
    {
        let activityTypeId = this.activityType.id;

        this.modelService
            .getTrainingActivitiesByType(activityTypeId)
            .subscribe((activities) => {
                this.activities = activities.map(a => TrainingActivity.fromRaw(a));
            }, (error) => {
                console.log('Error loading activities of type ' + activityTypeId);
                this.activities = null;
            });
    }
}
