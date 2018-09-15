import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {ModelService} from "../model.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {SelectItemService} from "../select-item.service";
import {SelectItemEvent} from "../models/select-item-event";
import {RestaurantMenu} from "../models/restaurant-menu";

@Component({
    selector: 'app-restaurant-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['../common/object-list.component.css', './menu.component.css'],
})
export class RestaurantMenuComponent implements OnInit {

    public menuItems: RestaurantMenu[] | null = null;

    private modalRef: BsModalRef;
    private selectedTabId: number = 1;
    private newItem: RestaurantMenu;
    private editingItem: RestaurantMenu;

    @ViewChild('newItemPopup')
    newItemPopup;
    @ViewChild('editItemPopup')
    editItemPopup;

    constructor(
        private modelService: ModelService,
        private modalService: BsModalService,
        private selectItemService: SelectItemService
    ) {
        this.selectItemService.event$.subscribe((e: SelectItemEvent) => {
            if (e.itemType === SelectItemEvent.Type.TrainingItemTypeRemove) {
                this.menuItems = this.menuItems.filter(a => a.id !== e.payload.activityTypeId);
            } else if (e.itemType === SelectItemEvent.Type.LanguageChange) {
                this.loadMenuItems(true);
            }
        });
    }

    public openNewItemPopup(catId: number, catTitle: string)
    {
        this.newItem = RestaurantMenu.fromRaw({
            menu_type: catId,
            category_title: catTitle,
            title: 'Новое блюдо',
            price: 555,
            size: ''
        });
        this.openModal(this.newItemPopup);
    }

    public openEditItemPopup(item: RestaurantMenu)
    {
        this.editingItem = item;
        this.openModal(this.editItemPopup);
    }

    public addItem()
    {
        this.menuItems.push(this.newItem);
        this.closePopup();
    }

    public getMenuCategories(catId: number): Array<string>
    {
        return Array.from(
            new Set(
                this.menuItems
                    .filter(i => i.menu_type == catId)
                    .map((item: RestaurantMenu) => item.category_title)
            )
        );
    }

    public getCategoryItems(catId: number, catTitle: string): RestaurantMenu[]
    {
        return this.menuItems
            .filter(i => i.menu_type == catId && i.category_title === catTitle);
    }

    public getCategories()
    {
        return RestaurantMenu.getCategories();
    }

    public getCategoryName(catId: number)
    {
        return RestaurantMenu.getMenuCategoryNameById(catId);
    }

    public isActive(id: number)
    {
        return this.selectedTabId === id;
    }

    public setActiveTabIndex(id: number)
    {
        this.selectedTabId = id;
    }

    public isReady()
    {
        return this.menuItems !== null;
    }

    public openModal(template: TemplateRef<any>) {
        this.modalRef = this.modalService.show(template);
    }

    public closePopup()
    {
        this.modalRef.hide();
    }

    public reorderApply()
    {
        this.modelService.reorderApply('restaurantMenu', this.menuItems);
    }

    private loadMenuItems(force = false)
    {
        this.modelService.getRestaurantMenu().subscribe((menuItems) => {
            menuItems.sort((a, b) => {
                return a.n - b.n
            });
            this.menuItems = menuItems.map(a => RestaurantMenu.fromRaw(a));
        });
    }


    ngOnInit() {
        this.loadMenuItems();
    }
}