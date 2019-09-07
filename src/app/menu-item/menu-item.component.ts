import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MenuItem } from './menu-item';
import { MenuItemService } from './menu-item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;
  @Input() isCreateNew: Boolean;

  @Output() newMenuList = new EventEmitter<MenuItem[]>();

  constructor(private menuService: MenuItemService) { }

  ngOnInit() {
  }

  applyChanges(): void {
    console.log("Applying menu change. New name: " + this.menuItem.name + ". New price: " + this.menuItem.price);
    if(this.isCreateNew) {
      this.menuService.createNew(this.menuItem).subscribe(newItem => {
        console.log("Item created. Id: " + newItem.id)
        this.updateMenuList();
      });      
    } else {
      this.menuService.applyChanges(this.menuItem).subscribe(newItem => {
        console.log("Item updated. Id: " + newItem.id);
        this.updateMenuList();
    });
    }
  }

  deleteItem(): void {
    console.log("Deleting item: " + this.menuItem.id);
    this.menuService.deleteItem(this.menuItem).subscribe(deletedItem => {
      console.log("Item deleted.");
      this.updateMenuList();
    });
  }

  updateMenuList(): void {
    this.menuService.getMenuItems().subscribe(newMenuList => this.newMenuList.emit(newMenuList));
  }
}
