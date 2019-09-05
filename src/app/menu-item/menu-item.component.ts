import { Component, OnInit, Input } from '@angular/core';
import { MenuItem } from '../menu-item';
import { MenuItemService } from '../menu-item.service';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {

  @Input() menuItem: MenuItem;

  constructor(private menuService: MenuItemService) { }

  ngOnInit() {
  }

  applyChanges(): void {
    console.log("Applying menu change. New name: " + this.menuItem.name + ". New price: " + this.menuItem.price)
    this.menuService.applyChanges(this.menuItem).subscribe(newItem => console.log("Item updated. Id: " + newItem.id));
  }
}
