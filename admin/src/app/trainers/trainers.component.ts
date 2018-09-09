import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {Trainer} from "../models/trainer";
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {State} from "../models/state";
import {bindToComponentState} from "../storage";
import {PagesService} from "../pages.service";

@Component({
    selector: 'trainers',
    templateUrl: './trainers.component.html',
    styleUrls: ['../common/object-list.component.css'],
})
export class TrainersComponent extends State implements OnInit {

    @ViewChild('trainersList') trainersContainer: any;

    static DETAIL_TRAINER_PAGE_ID = 29;

    modalRef: BsModalRef;

    openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    processLoadedState() {
        let state = this.getState();
        for (let key in state) {
            this[key] = state[key];
        }

        if (this.selectedTrainer !== null && this.trainers) {
            this.loadTrainer(this.trainers.find(t => t.id == this.selectedTrainer.id), true);
        }
    }

    detailPage = null;

    public getTrainerPageUrl(trainer: Trainer)
    {
        if (!trainer.alias || !trainer.alias.trim()) {
            return null;
        }

        if (this.detailPage !== null) {
            let aliasRegex = /<alias:(.*)>/gi;
            return this.detailPage.url.replace(aliasRegex, trainer.alias);
        }

        return null;
    }

    reorderApply() {
        this.modelService.reorderApply('trainer', this.trainers);
    }

    public trainers: Trainer[];

    @bindToComponentState
    public selectedTrainer: Trainer;

    public newTrainer: Trainer;

    constructor(private modelService: ModelService,
                private pagesService: PagesService,
                private selectItemService: SelectItemService,
                private modalService: BsModalService,) {
        super();
        this.newTrainer = new Trainer();

        selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.TrainerRemove) {
                this.trainers = this.trainers.filter(t => t.id !== event.payload.trainerId);
            } else if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.loadTrainers(true);
            } else if (event.itemType === SelectItemEvent.Type.TrainerClose) {
                if (this.selectedTrainer.id == event.payload.trainerId) {
                    this.unselectTrainer();
                }
            }
        });
    }

    private loadTrainers(force: boolean = false) {
        this.modelService.getTrainers().subscribe(trainers => {
            trainers.sort((a, b) => {
                return a.n - b.n
            });
            this.trainers = trainers;
            this.processLoadedState();
            if (force) {
                if (this.selectedTrainer !== null) {
                    const selectedTrainerId = this.selectedTrainer.id;
                    this.selectedTrainer = this.trainers.find(t => t.id == selectedTrainerId);
                    this.loadTrainer(this.selectedTrainer);
                }
            }
        });
    }

    private unselectTrainer() {
        this.selectedTrainer = null;
    }

    public loadTrainer(trainer: Trainer, initial:boolean = false) {
        this.selectedTrainer = trainer;
        this.selectItemService.emit(new SelectItemEvent(
            SelectItemEvent.Type.TrainerSelect,
            {
                trainer: trainer,
                initial: initial
            }
        ));
    }

    public createNewTrainer(newTrainerName) {
        this.newTrainer.name = newTrainerName;

        this.modelService.createTrainer(this.newTrainer).subscribe(trainer => {
            this.trainers.push(trainer as Trainer);
            this.loadTrainer(trainer as Trainer);
            this.modalRef.hide();
            this.newTrainer = new Trainer();
            this.trainersContainer.scrollTop = this.trainersContainer.scrollHeight;
        });
    }

    private loadDetailPage() {
        this.pagesService.getPage(TrainersComponent.DETAIL_TRAINER_PAGE_ID).subscribe((page) => {
            this.detailPage = page;
        });
    }

    ngOnInit() {
        this.loadTrainers();
        this.loadDetailPage();
    }
}