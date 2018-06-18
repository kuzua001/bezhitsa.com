import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {Trainer} from "../models/trainer";
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'trainers',
  templateUrl: './trainers.component.html',
  styleUrls: ['./trainers.component.css'],
})
export class TrainersComponent implements OnInit {

  @ViewChild('trainersList') trainersContainer: any;

  modalRef: BsModalRef;

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  public trainers: Trainer[];

  public selectedTrainer: Trainer;

  public newTrainer: Trainer;

  constructor(
      private modelService: ModelService,
      private selectItemService: SelectItemService,
      private modalService: BsModalService
  ) {
    this.newTrainer = new Trainer();

      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.TrainerRemove) {
              this.trainers = this.trainers.filter(t => t.id !== event.payload.trainerId);
          }
      });

      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.TrainerClose) {
              if (this.selectedTrainer.id == event.payload.trainerId) {
                this.unselectTrainer();
              }
          }
      });
  }

  private loadTrainers()
  {
    this.modelService.getTrainers().subscribe(trainers => {
      this.trainers = trainers;
    });
  }

  private unselectTrainer()
  {
    this.selectedTrainer = null;
  }

  public loadTrainer(trainer: Trainer) {
    this.selectedTrainer = trainer;
      this.selectItemService.emit(new SelectItemEvent(
          SelectItemEvent.Type.TrainerSelect,
          {
              trainer : trainer
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

  ngOnInit() {
    this.loadTrainers();
  }
}
