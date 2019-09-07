import { Component, OnInit } from '@angular/core';
import { Table } from '../table/table'
import { TableService } from '../table/table.service'

@Component({
  selector: 'app-table-editor',
  templateUrl: './table-editor.component.html',
  styleUrls: ['./table-editor.component.css']
})
export class TableEditorComponent implements OnInit {

  tables: Table[];
  selectedTable: Table;
  newSelected = false;
  newItem: Table;
  newItemTemplate = new Table();

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.getTables();
    this.newItemTemplate.id = "Новый";
    this.newItemTemplate.name = "Введите название";
  }

  onSelect(table: Table): void {
    this.newSelected = false;
    this.newItem = null;
    this.selectedTable = table;
  }

  onSelectNew(): void {
    this.selectedTable = null;
    this.newSelected = true;
    this.newItem = new Table();
    this.newItem.id = "Новый";
    this.newItem.name = "Введите название";
  }

  getTables(): void {
    this.tableService.getTables().subscribe(tables => this.tables = tables);
  }

  onNewTableList(newTableList: Table[]): void {
    console.log("On new table list called!");
    for(let item of newTableList) {
      console.log("[" + item.id + ", " + item.name + "]");
    }
    
    this.tables = newTableList;
    this.selectedTable = null;
    this.newItem = null; 
  }
}
