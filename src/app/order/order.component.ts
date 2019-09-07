import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Order } from './order';
import { OrderService } from './order.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { MenuItemService } from '../menu-item/menu-item.service';
import { MenuItem } from '../menu-item/menu-item';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  @Input() order: Order;
  @Input() isCreateNew: Boolean;

  menuList: MenuItem[];
  selectedItem: MenuItem;

  @Output() newOrderList = new EventEmitter<Order[]>();

  constructor(private route: ActivatedRoute,
              private orderService: OrderService,
              private location: Location,
              private menuService: MenuItemService) { }

  ngOnInit() {
    this.getOrder();
    this.getMenuList();
  }

  getOrder(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.orderService.getOrderByID(id).subscribe(order => this.order = order);
  }

  getMenuList(): void {
    this.menuService.getMenuItems().subscribe(menuList => this.menuList = menuList);
  }

  goBack(): void {
    this.location.back();
  }
}
