import {Component, EventEmitter, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { SubMenuComponent } from '../sub-menu.component';
import { PagesListComponent } from '../../pages-list/pages-list.component'
import {ModelService} from "../../model.service";
import {ImageFilters} from "../../models/image-filters";
import {SelectItemService} from "../../select-item.service";
import {SelectItemEvent} from "../../models/select-item-event";
import {ImageFilter} from "../../models/image-filter";

@Component({
  selector: 'sub-menu-images',
  templateUrl: './images.component.html',
  styleUrls: ['./images.component.css'],
})
export class SubMenuImagesComponent extends SubMenuComponent {

  private filter: ImageFilter;

  private tagsFilter: string = '';

  private showTagsBox: boolean = false;

  private selectedTagIndex: number = 0;

  public focusEventEmitter = new EventEmitter<boolean>();

  private isTagSelected(tag: string): boolean
  {
    return !!this.filter.selectedTags.find(t => t === tag);
  }

  public setSelectedTagIndex(index)
  {
    this.selectedTagIndex = index;
  }

  public increaseSelectedTagIndex()
  {
    this.selectedTagIndex ++;
    if (this.selectedTagIndex >= this.getFilteredTags.length) {
      this.selectedTagIndex = 0;
    }
  }

  public blurProcessing($event)
  {
    if ($event.srcElement.id !== 'tags-input' && $event.srcElement.id !== 'tags-list-box') {
        console.log('hide');
        this.showAvailableTags(false);
        this.focusEventEmitter.emit(false);
    }
  }

  public decreaseSelectedTagIndex()
  {
      this.selectedTagIndex --;
      if (this.selectedTagIndex < 0) {
          this.selectedTagIndex = this.getFilteredTags.length - 1;
      }
  }

  private showAvailableTags(show: boolean = true)
  {
    if (show)
    {
      this.selectedTagIndex = 0;
    }
    this.showTagsBox = show;
  }

  public applyFilter()
  {
      this.selectItemService.emitEventOfType(SelectItemEvent.Type.ApplyFilter, {
          'filter' : this.filter
      });
  }

  public unselectTag(tag: string)
  {
    this.filter.selectedTags = this.filter.selectedTags.filter(t => t !== tag);
    this.applyFilter();
  }

  public processBlur($event)
  {
    console.log($event);
  }

  public selectTag(tag: string = null)
  {

    if (tag === null) {
      tag = this.getFilteredTags[this.selectedTagIndex];
    }

    if (!this.filter.selectedTags.find(t => t === tag)) {
        this.filter.selectedTags.push(tag);
        this.tagsFilter = '';
        this.showAvailableTags(false);
        this.focusEventEmitter.emit(false);
        this.applyFilter();
    }
  }

  public get getFilteredTags()
  {
    let result = [];
    if (!this.tagsFilter) {
        result = this.imageFilters.tags.filter((tag) => {
        return !this.isTagSelected(tag);
      });
    } else {
        result = this.imageFilters.tags.filter((tag) => {
          return tag.startsWith(this.tagsFilter) && !this.isTagSelected(tag);
        });
    }

    return result.sort((a: string, b: string) => {
        a = a.toLowerCase();
        b = b.toLowerCase();
        return a < b ? -1 : (a > b ? 1 : 0);
    });
  }

  private imageFilters: ImageFilters = null;

  public constructor(
      private modelService: ModelService,
      private selectItemService: SelectItemService
  ) {
      super();
      this.filter = new ImageFilter();
      this.filter.selectedTags = [];
      this.filter.selectedType = null;
      this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
          if (event.itemType === SelectItemEvent.Type.NewTag) {
              const tag = event.payload.tag;
              if (this.imageFilters.tags.find(t => t === tag) === undefined) {
                  this.imageFilters.tags.push(tag);
              }
          }

          if (event.itemType === SelectItemEvent.Type.RefreshTags) {
              this.loadImageFilters();
          }
      });
  }

  private loadImageFilters()
  {
    this.modelService.getImageFilters().subscribe((filters) => {
      this.imageFilters = filters;
      if (this.filter.selectedTags.length) {
          let oldSelectedTags = Object.assign({}, this.filter.selectedTags);
          this.filter.selectedTags = this.filter.selectedTags.filter(tag => {
              return !!this.imageFilters.tags.find(t => t === tag);
          });

          if (oldSelectedTags !== this.filter.selectedTags) {
              this.applyFilter();
          }
      }
    });
  }

  ngOnInit() {
    this.loadImageFilters();
  }

}