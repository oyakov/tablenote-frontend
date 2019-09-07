import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuEditorComponent } from './menu-editor/menu-editor.component';
import { TableEditorComponent } from './table-editor/table-editor.component';
import { OrderEditorComponent } from './order-editor/order-editor.component';
import { OrderComponent } from './order/order.component';

const routes: Routes = [
  { path: 'menu', component: MenuEditorComponent },
  { path: 'table', component: TableEditorComponent },
  { path: 'order', component: OrderEditorComponent },
  { path: '', redirectTo: '/order', pathMatch: 'full' },
  { path: 'order/:id', component: OrderComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
