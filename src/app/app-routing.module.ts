import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { AdminComponent } from './admin/admin.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HrComponent } from './hr/hr.component';
import { CrudComponent } from './crud/crud.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EditEmployeeComponent } from './edit-employee/edit-employee.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path : 'login', component : LoginComponent},
  {path : 'register', component : RegisterComponent},
  {path : 'home' , component : HomeComponent, canActivate : [AuthGuard]},
  {path : 'admin', component : AdminComponent},
  {path : 'hr', component : HrComponent},
  {path : 'crud', component : CrudComponent},
  {path : 'addEmployee', component : AddEmployeeComponent},
  {path : 'editEmployee', component : EditEmployeeComponent},
  {path : '**', component : PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponents= [
  LoginComponent,
  RegisterComponent,
  HomeComponent,
  AdminComponent,
  HrComponent,
  PageNotFoundComponent,
  CrudComponent,
  AddEmployeeComponent,
  EditEmployeeComponent

];
