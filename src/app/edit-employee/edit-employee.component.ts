import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Employee } from '../employee';
import { CrudService } from '../crud.service';
import { CrudComponent } from '../crud/crud.component';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {

  public employee : Employee;
  
  constructor(private _activedRoute: ActivatedRoute,
    private _route: Router, private _crudService: CrudService) { }

  ngOnInit() {
    debugger;
      this._activedRoute.params.subscribe(
      data => {
        this.employee = JSON.parse(data.record);
      }
    )
  }

  editEmployee(employee){
    debugger;
    this._crudService.editEmployee(this.employee).subscribe(
      data => {
        debugger;
        this._route.navigate(["/crud"]);
      },
      error => {
        alert("error " + error.statusText);
      }
    )
  }

}
