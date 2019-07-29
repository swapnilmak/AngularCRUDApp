import { Component, OnInit } from '@angular/core';
import { CrudService } from '../crud.service';
import { Employee } from '../employee';
import { Address } from '../address';
import { Router, ActivatedRoute } from '@angular/router';
import { jsonpCallbackContext } from '@angular/common/http/src/module';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {

  public errorMessage : string;
  employees = [];

  constructor(private _crudService: CrudService, private _route: Router,
    private _activatedRoute : ActivatedRoute) { }
  

  ngOnInit() {
    this.getEmployees();
  }

  getEmployees(){
    this._crudService.getEmployees().subscribe(
      data => {
        this.employees = data;
        console.log(this.employees);
      },
      error => {
        this.errorMessage = error.statusText;
        console.log(this.errorMessage);
      }
    )
  }

  

  deleteEmployeeClick(employee){
    debugger;
    this._crudService.deleteEmployee(employee).subscribe(
      data => {
        alert("data " + data);
        this.getEmployees();
      },
      error => {
        alert("error " + error.statusText);
      }
    )
  }

  editEmployeeClick(employee){
    debugger;
    let emp = JSON.stringify(employee);
    
    this._route.navigate(['/editEmployee',{record : encodeURIComponent(emp)}]);
  }

}
