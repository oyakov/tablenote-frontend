import { Component, OnInit } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-menu-editor',
  templateUrl: './menu-editor.component.html',
  styleUrls: ['./menu-editor.component.css']
})
export class MenuEditorComponent implements OnInit {

  menuItems: MenuItem[];
  selectedItem: MenuItem;

  constructor(private menuService: MenuItemService) { }

  ngOnInit() {
    this.getMenuItems();
  }

  onSelect(item: MenuItem): void {
    this.selectedItem = item;
  }

  getMenuItems(): void {
    // TODO: Getting mocked items for now. Provide an elaborate implementation
    this.menuService.getMenuItems().subscribe(menuItems => this.menuItems = menuItems);
  }

}
