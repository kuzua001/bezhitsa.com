import {MenuItem} from "./menu-item";

export class SelectItemEvent {
	itemType: SelectItemEvent.Type;
	payload: any;


	constructor(itemType: SelectItemEvent.Type, payload: any) {
		this.itemType = itemType;
		this.payload = payload;
	}
}

export namespace SelectItemEvent {
	export enum Type {
		Page,
		TrainerSelect,
		TrainerRemove,
		TrainerClose,
        RoomSelect,
        RoomRemove,
        RoomClose,
		LanguageChange,
		ImageChooserApply,
	}
}