import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { TableEditorComponent } from './table-editor/table-editor.component';
import { MenuItemComponent } from './menu-item/menu-item.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuEditorComponent,
    TableEditorComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
