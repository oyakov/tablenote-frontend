import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { TableEditorComponent } from './table-editor/table-editor.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { AppRoutingModule } from './app-routing.module';
import { TableComponent } from './table/table.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrderComponent } from './order/order.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEditorComponent,
    TableEditorComponent,
    MenuItemComponent,
    TableComponent,
    OrderEditorComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
