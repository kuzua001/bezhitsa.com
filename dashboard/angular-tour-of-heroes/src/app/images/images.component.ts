import {Component, OnInit, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
import {ModelService} from "../model.service";
import {Image} from "../models/image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  private images: Image[];

  imageDataForUpdateEditing: ReadFile;

  editingImage: Image|null;

  modalRef: BsModalRef;

  @ViewChildren('imagesList') imageList;
  @ViewChild('imageEditor') imageEditor: TemplateRef<any>;

  constructor(
      private modelService: ModelService,
      private modalService: BsModalService
  ) {
      this.imageDataForUpdateEditing = null;
  }

  openEditor(image: Image) {
      this.editingImage = image;
      this.modalRef = this.modalService.show(this.imageEditor);
  }

  private loadImages()
  {
      this.modelService.getImages().subscribe(images => {
          this.images = images;
      });
  }

  ngOnInit() {
    this.loadImages();
  }

  public detectOrientation(i: number)
  {
      let image = this.imageList.toArray()[i].nativeElement;

      if (image.naturalWidth > image.naturalHeight) {
          image.classList.add('landscape');
      } else if (image.naturalWidth < image.naturalHeight) {
          image.classList.add('portrait');
      }
  }

  public dropped($event: ReadFile) {
      let content = $event.content;
      this.modelService.createImage($event, (response) => {
          if (response.status === 'success') {
              this.images.unshift(response.image);
          }
      });
  }

  public droppedForUpdate($event: ReadFile) {
      this.imageDataForUpdateEditing = $event;
  }
}
