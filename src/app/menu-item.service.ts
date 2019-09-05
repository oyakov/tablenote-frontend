import { Injectable } from '@angular/core';
import { MenuItem } from './menu-item';
import { MENU } from './mock-menu';

@Injectable({
  providedIn: 'root'
})
export class MenuItemService {

  constructor() { }

  getMockMenuItems(): MenuItem[] {
    return MENU;
  }

  getMenuItems(): MenuItem[] {
    // TODO: Implement Java REST API call
    return null;
  }
}
