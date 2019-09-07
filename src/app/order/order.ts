import { Table } from '../table/table'
import { MenuItem } from '../menu-item/menu-item'

export class Order {
    id: string;
    table: Table;
    items: MenuItem[];
    state: string;
}