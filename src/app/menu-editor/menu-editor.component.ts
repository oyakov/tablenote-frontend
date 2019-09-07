import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item/menu-item';
import { MenuItemService } from '../menu-item/menu-item.service';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.css']
})
export class MenuEditorComponent implements OnInit {

  menuItems: MenuItem[];
  selectedItem: MenuItem;
  newSelected = false;
  newItem: MenuItem;
  newItemTemplate = new MenuItem();

  constructor(private menuService: MenuItemService) { }

  ngOnInit() {
    this.getMenuItems();
    this.newItemTemplate.id = "Новый";
    this.newItemTemplate.name = "Введите название";
    this.newItemTemplate.price = 0;
  }

  onSelect(item: MenuItem): void {
    this.newSelected = false;
    this.newItem = null;
    this.selectedItem = item;
  }

  onSelectNew(): void {
    this.selectedItem = null;
    this.newSelected = true;
    this.newItem = new MenuItem();
    this.newItem.id = "Новый";
    this.newItem.name = "Введите название";
    this.newItem.price = 0;
  }

  getMenuItems(): void {
    this.menuService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }

  onNewMenuList(newMenuList: MenuItem[]): void {
    console.log("On new menu list called!");
    for(let item of newMenuList) {
      console.log("[" + item.id + ", " + item.name + ", " + item.price + "]");
    }
    
    this.menuItems = newMenuList;
    this.selectedItem = null;
    this.newItem = null; 
  }

}
