import { Component, OnInit } from '@angular/core';
import { Order } from '../order/order'
import { OrderService } from '../order/order.service';

@Component({
  selector: 'app-order-editor',
  templateUrl: './order-editor.component.html',
  styleUrls: ['./order-editor.component.css']
})
export class OrderEditorComponent implements OnInit {

  orders: Order[];
  selectedOrder: Order;

  constructor(private orderService: OrderService) { }

  ngOnInit() {
    this.getOrders();
  }

  getOrders(): void {
    this.orderService.getOrders().subscribe(newOrders => this.orders = newOrders);
  }
  
  onSelect(order: Order) {
    this.selectedOrder = order;
  }

  public getTotal(order: Order): number {
    return order.items.reduce((acc, item) => acc + item.price, 0);
  }
}
