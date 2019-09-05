import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { MENU } from './mock-menu';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  private menuUrl = 'http://localhost:8080/menu';

  constructor(private http: HttpClient) { }

  getMockMenuItems(): Observable<MenuItem[]> {
    return of(MENU);
  }

  getMenuItems(): Observable<MenuItem[]> {
    // TODO: Implement Java REST API call
    return this.http.get<MenuItem[]>(this.menuUrl);
  }

  applyChanges(item: MenuItem): Observable<MenuItem> {
    console.log("[Service layer]. Applying menu change. New name: " + item.name + ". New price: " + item.price)
    return this.http.put<MenuItem>(this.menuUrl + "/" + item.id, item);
  }
}
