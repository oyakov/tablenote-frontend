import { Injectable } from '@angular/core';
import { Order } from './order';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private orderUrl = 'http://localhost:8080/order';

  constructor(private http: HttpClient) { }

  getOrders(): Observable<Order[]> {
    return this.http.get<Order[]>(this.orderUrl);
  }

  getOrderByID(id: string): Observable<Order> {
    return this.http.get<Order>(this.orderUrl + "/id/" + id);
  }

  applyChanges(order: Order): Observable<Order> {
    return this.http.put<Order>(this.orderUrl + "/" + order.id, order);
  }

  createNew(order: Order): Observable<Order> {
    return this.http.post<Order>(this.orderUrl, order);
  }

  deleteOrder(order: Order): Observable<Order> {
    return this.http.delete<Order>(this.orderUrl + "/" + order.id);
  }
}
