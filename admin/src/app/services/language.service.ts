import {SelectItemEvent} from "../models/select-item-event";
import {SelectItemService} from "../select-item.service";
import {Component, Injectable} from "@angular/core";

@Injectable()
export class LanguageService {
    private language: number = 1;

    public constructor(private selectItemService: SelectItemService) {
        this.selectItemService.event$.subscribe((event: SelectItemEvent) => {
            if (event.itemType === SelectItemEvent.Type.LanguageChange) {
                this.language = event.payload.language;
            }
        });
    }

    public getLanguage(): number
    {
        return this.language;
    }
}