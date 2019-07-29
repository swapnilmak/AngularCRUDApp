import { Component, OnInit } from '@angular/core';
import { Address } from '../address';
import { Employee } from '../employee';
import { CrudService } from '../crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  public addResponseMessage : string;
  constructor(private crudService: CrudService, private _route : Router) { }
  address = new Address('','','');
  employee = new Employee(0,'',0, this.address);
  ngOnInit() {
  }

  saveEmployee(){
    debugger;
    let id =this.employee;
    this.crudService.addEmployee(this.employee).subscribe(
      data => {
        debugger;
        //this.addResponseMessage = data;
        this._route.navigate(["/crud"]);
        console.log(data);
      },
      error =>{
        console.log(error);
      }
    )
  }

}
