import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Table } from './table' 

@Injectable({
  providedIn: 'root'
})
export class TableService {

  private tableUrl = 'http://localhost:8080/table';

  constructor(private http: HttpClient) { }

  getTables(): Observable<Table[]> {
    return this.http.get<Table[]>(this.tableUrl);
  }

  applyChanges(table: Table): Observable<Table> {
    console.log("[Service layer]. Applying table change. New name: " + table.name);
    return this.http.put<Table>(this.tableUrl + "/" + table.id, table);
  }

  createNew(table: Table): Observable<Table> {
    return this.http.post<Table>(this.tableUrl, table);
  }

  deleteTable(table: Table): Observable<Table> {
    return this.http.delete<Table>(this.tableUrl + "/" + table.id);
  }
}
