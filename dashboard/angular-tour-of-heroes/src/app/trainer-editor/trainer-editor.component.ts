import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {Trainer} from "../models/trainer";
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {ReadFile} from 'ngx-file-helpers';


@Component({
  selector: 'trainer-editor',
  templateUrl: './trainer-editor.component.html',
  styleUrls: ['./trainer-editor.component.css'],
})
export class TrainerEditorComponent implements OnInit {

  modalRef: BsModalRef;

  public trainer: Trainer;

  public newImageFile: ReadFile;

  constructor(
      private selectItemService: SelectItemService,
      private modelService: ModelService,
      private modalService: BsModalService
  ) {
      selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.TrainerSelect) {
              this.trainer = event.payload.trainer;
          }
      });

  }

  selectImage(imageId) {
      this.trainer.img_id = imageId;
  }

  openModal(template: TemplateRef<any>) {
      this.modalRef = this.modalService.show(template);
  }

  public close() {
      this.selectItemService.emit(
          new SelectItemEvent(SelectItemEvent.Type.TrainerClose, {
              trainerId: this.trainer.id
          }));

      this.trainer = null;
  }

  public save()
  {
      let trainerItem = Object.setPrototypeOf(this.trainer, Trainer.prototype);
      this.modelService.saveTrainer(trainerItem);
  }

  public delete()
  {
      this.modelService.deleteTrainer(this.trainer)
          .subscribe(() => {
              let trainerId = this.trainer.id;
              this.trainer = null;
              this.modalRef.hide();
              this.selectItemService.emit(
                  new SelectItemEvent(SelectItemEvent.Type.TrainerRemove, {
                      trainerId: trainerId
                  }));
          });
  }

  public dropped(file: ReadFile) {
      this.newImageFile = file;
      //this.cropper.setImage(this.newImageFile.content);
  }

  public cancelImage() {
      this.newImageFile = null;
  }

  public fileOver(event) {
      console.log(event);
  }

  public fileLeave(event) {
      console.log(event);
  }


  ngOnInit() {
    this.trainer = null;
    this.newImageFile = null;
  }
}
