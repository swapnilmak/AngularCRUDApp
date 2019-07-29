import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private _url = "http://localhost:9090/restApi/";

  constructor(private http: HttpClient) { }

  getEmployees(){
    let employees =[];
    return this.http.get<Employee[]>(this._url + "employees.json");
  }

  addEmployee(employee){
    return this.http.post<Employee>(this._url + "employees", employee);
  }

  editEmployee(employee){
    debugger;
    let id= parseInt(employee.id);
    return this.http.put<Employee>(this._url + "employees/" + id, employee);
  }

  deleteEmployee(employee){
    debugger;
    let id= parseInt(employee.id);
    return this.http.delete<Employee>(this._url + "employees/"+ id); 
  }
}
