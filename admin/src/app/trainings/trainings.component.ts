import {Component, OnInit, TemplateRef} from '@angular/core';
import {ModelService} from "../model.service";
import {TrainingActivityType} from "../models/training-activity-type";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";

@Component({
    selector: 'trainings',
    templateUrl: './trainings.component.html',
    styleUrls: ['../common/object-list.component.css', './trainings.component.css'],
})
export class TrainingsComponent implements OnInit {

    public activityTypes: TrainingActivityType[]|null = null;

    modalRef: BsModalRef;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }


    selectedActivityType: TrainingActivityType|null = null;


    constructor(
        private modelService: ModelService,
        private modalService: BsModalService,
        private selectItemService: SelectItemService
    ) {
        this.selectItemService.event$.subscribe((e: SelectItemEvent) => {
            if (e.itemType === SelectItemEvent.Type.TrainingItemTypeRemove) {
                this.selectedActivityType = null;
                this.activityTypes = this.activityTypes.filter(a => a.id !== e.payload.activityTypeId);
            } else if (e.itemType === SelectItemEvent.Type.LanguageChange) {
                this.loadActivities(true);
            }
        });
    }

    private loadActivities(force = false)
    {
        this.modelService.getTrainingActivityTypes().subscribe((activityTypes) => {
            activityTypes.sort((a, b) => {
                return a.n - b.n
            });
            this.activityTypes = activityTypes.map(a => TrainingActivityType.fromRaw(a));
            if (force) {
                if (this.selectedActivityType !== null) {
                    const loadActivityTypeId = this.selectedActivityType.id;
                    this.selectedActivityType = this.activityTypes.find(t => t.id == loadActivityTypeId);
                    this.loadActivityType(this.selectedActivityType);
                }
            }
        });
    }

    ngOnInit() {
        this.loadActivities();
    }

    public reorderApply()
    {
        this.modelService.reorderApply('trainingActivityType', this.activityTypes);
    }

    public createNewActivityType(name: string)
    {
        let newActivityType = new TrainingActivityType();
        newActivityType.short_title = name;
        this.modelService.createTrainingActivityType(newActivityType).subscribe(activityType => {
            console.log(activityType);
           this.activityTypes.push(activityType);
        });
    }

    public loadActivityType(activityType: TrainingActivityType)
    {
        this.selectedActivityType = activityType;
    }
}