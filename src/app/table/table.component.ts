import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Table } from './table';
import { TableService } from './table.service'

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() table: Table;  
  @Input() isCreateNew: Boolean;

  @Output() newTableList = new EventEmitter<Table[]>();

  constructor(private tableService: TableService) { }

  ngOnInit() {
  }

  applyChanges(): void {
    console.log("Applying table change. New name: " + this.table.name);
    if(this.isCreateNew) {
      this.tableService.createNew(this.table).subscribe(newTable => {
        console.log("Table created. Id: " + newTable.id)
        this.updateTableList();
      });      
    } else {
      this.tableService.applyChanges(this.table).subscribe(newTable => {
        console.log("Table updated. Id: " + newTable.id);
        this.updateTableList();
    });
    }
  }

  deleteTable(): void {
    console.log("Deleting table: " + this.table.id);
    this.tableService.deleteTable(this.table).subscribe(deletedTable => {
      console.log("Table deleted.");
      this.updateTableList();
    });
  }

  updateTableList(): void {
    this.tableService.getTables().subscribe(newTableList => this.newTableList.emit(newTableList));
  }
}
