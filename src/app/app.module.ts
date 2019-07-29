import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, RoutingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { LoginServiceService } from './login-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CrudService } from './crud.service';
import { AuthGuard } from './auth.guard';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    RoutingComponents
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [LoginServiceService, CrudService, AuthGuard, LoginComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
