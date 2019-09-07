import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuUrl = 'http://localhost:8080/menu';

  constructor(private http: HttpClient) { }

  getMenuItems(): Observable<MenuItem[]> {
    return this.http.get<MenuItem[]>(this.menuUrl);
  }

  applyChanges(item: MenuItem): Observable<MenuItem> {
    console.log("[Service layer]. Applying menu change. New name: " + item.name + ". New price: " + item.price);
    return this.http.put<MenuItem>(this.menuUrl + "/" + item.id, item);
  }

  createNew(item: MenuItem): Observable<MenuItem> {
    return this.http.post<MenuItem>(this.menuUrl, item);
  }

  deleteItem(item: MenuItem): Observable<MenuItem> {
    return this.http.delete<MenuItem>(this.menuUrl + "/" + item.id);
  }
}
