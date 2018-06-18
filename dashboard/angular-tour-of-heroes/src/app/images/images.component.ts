import { Component, OnInit } from '@angular/core';
import {ModelService} from "../model.service";
import {Image} from "../models/image";
import {ReadFileImpl} from "ngx-file-helpers/src/read-file-impl";
import {ReadFile} from "ngx-file-helpers";

@Component({
  selector: 'app-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css']
})
export class ImagesComponent implements OnInit {

  private images: Image[];

  constructor(private modelService: ModelService) { }

  private loadImages()
  {
      this.modelService.getImages().subscribe(images => {
          this.images = images;
      });
  }

  ngOnInit() {
    this.loadImages();
  }

  public dropped($event: ReadFile) {
      console.log($event);
      let content = $event.content;
      this.modelService.createImage($event, (response) => {
          if (response.status === 'success') {
              this.images.unshift(response.image);
          }
      });
  }
}
