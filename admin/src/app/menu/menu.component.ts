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
    public itemsToSort: RestaurantMenu[] = [];
    public titlesToSort: Array<string> = [];
    public language: number;

    private editingTitle: string | null = null;
    private editingTitleOld: string | null = null;
    private selectedTabId: number = 1;
    private modalRefs: BsModalRef[] = [];
    private newItem: RestaurantMenu;
    private editingItem: RestaurantMenu;
    private itemToDelete: RestaurantMenu | null = null;
    private isNewCategory: boolean = false;

    @ViewChild('newItemPopup')
    newItemPopup;

    @ViewChild('editItemPopup')
    editItemPopup;

    @ViewChild('reorderItemPopup')
    reorderItemPopup;

    @ViewChild('editTitlePopup')
    editTitlePopup;

    @ViewChild('reorderTitlePopup')
    reorderTitlePopup;

    @ViewChild('deleteItemConfirmPopup')
    deleteItemConfirmPopup;

    @ViewChild('deleteCategoryConfirmPopup')
    deleteCategoryConfirmPopup;

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
                this.language = e.payload.language;
            }
        });
    }

    public isEditingAllowed()
    {
        return this.language != 2;
    }

    public openNewTitlePopup(catId: number)
    {
        this.openNewItemPopup(catId, '', true);
    }

    public isCreatingNewCategory()
    {
        return this.isNewCategory;
    }

    public changeTitle()
    {
        this.modelService
            .renameRestaurantMenuCategory(this.editingTitleOld, this.editingTitle)
            .subscribe(() => {
                this.menuItems
                    .filter(i => i.category_title === this.editingTitleOld)
                    .forEach((item) => {
                        item.category_title = this.editingTitle;
                    });

                this.closeAllPopups();
            }, () => {});
    }

    public deleteCategory()
    {
        this.modelService
            .deleteRestaurantMenuCategory(this.editingTitleOld)
            .subscribe(() => {
                this.menuItems = this.menuItems.filter(i => i.category_title !== this.editingTitleOld);
                this.closeAllPopups();
            }, () => {});
    }

    public deleteCategoryWithConfirm()
    {
        this.openModal(this.deleteCategoryConfirmPopup);
    }

    public reorderTitleApply()
    {
        let currentItems = this.menuItems.filter(i => i.menu_type === this.selectedTabId);
        currentItems.forEach((item) => {
           item.n = item.n % 1000  + this.titlesToSort.indexOf(item.category_title) * 1000;
           item.n = item.n % 1000  + this.titlesToSort.indexOf(item.category_title) * 1000;
        });
        this.menuItems.sort((a, b) => a.n - b.n);
        this.modelService.reorderApplyByN('restaurantMenu', currentItems);
        this.closeAllPopups();
    }

    public openReorderTitlesPopup(catId: number)
    {
        this.titlesToSort = this.getMenuCategories(catId);
        this.openModal(this.reorderTitlePopup);
    }

    public openReorderPopup(catId: number, catTitle: string)
    {
        this.itemsToSort = this.getCategoryItems(catId, catTitle);
        this.openModal(this.reorderItemPopup);
    }

    public apply()
    {
        this.modelService
            .updateRestaurantMenuItem(this.editingItem)
            .subscribe(() => {
                this.closeAllPopups();
            });
    }

    public deleteItemWithConfirm(item: RestaurantMenu)
    {
        this.itemToDelete = item;
        this.openModal(this.deleteItemConfirmPopup);
    }

    public deleteItem()
    {
        this.modelService
            .deleteRestaurantMenuItem(this.itemToDelete)
            .subscribe(() => {
                this.menuItems = this.menuItems.filter(i => i.id !== this.itemToDelete.id);
                this.itemToDelete = null;
                this.closeAllPopups();
            });
    }

    public openNewItemPopup(catId: number, catTitle: string = '', isNewCategory: boolean = false)
    {
        this.isNewCategory = isNewCategory;
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

    public openEditTitlePopup(title: string)
    {
        this.editingTitle = title;
        this.editingTitleOld = title;
        this.openModal(this.editTitlePopup);
    }

    public addItem()
    {
        let newN = this.getMenuCategories(this.selectedTabId).length * 1000;
        if (!this.isNewCategory) {
            newN = Math.max(
                ...this.menuItems.filter(i => i.category_title == this.newItem.category_title).map(i => i.n)
            ) + 1;
        }
        this.isNewCategory = false;
        this.newItem.n = newN;
        this.modelService
            .createRestaurantMenuItem(this.newItem)
            .subscribe((item) => {
                this.menuItems.push(item);
                this.closePopup();
            });
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
            .filter(i => i.menu_type == catId && i.category_title === catTitle)
            .sort((a, b) => a.n - b.n);
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
        this.modalRefs.push(this.modalService.show(template));
    }

    public closePopup()
    {
        this.modalRefs[this.modalRefs.length - 1].hide();
        if (this.modalRefs.length > 0) {
            this.modalRefs.splice(-1, 1);
        }
    }

    public reorderApply()
    {
        let data = [];
        this.itemsToSort.forEach((item, index) => {
            let dataItem = this.menuItems.find(i => i.id === item.id);
            dataItem.n = index + Math.round(dataItem.n / 1000) * 1000;
            data.push(dataItem);
        });
        this.modelService.reorderApplyByN('restaurantMenu', data);
        this.closeAllPopups();
    }

    private closeAllPopups()
    {
        while (this.modalRefs.length) {
            this.closePopup();
        }
    }

    private loadMenuItems(force = false)
    {
        this.modelService.getRestaurantMenu().subscribe((menuItems) => {
            menuItems.sort((a, b) => {
                return a.n - b.n
            });
            this.menuItems = menuItems
                .map(a => RestaurantMenu.fromRaw(a))
                .sort((a,b) => a.n - b.n);
            this.titlesToSort = this.getMenuCategories(this.selectedTabId);
        });
    }


    ngOnInit() {
        this.loadMenuItems();
    }
}