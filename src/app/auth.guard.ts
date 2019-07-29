import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginComponent } from './login/login.component';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private loginComponent : LoginComponent){

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      debugger;
      console.log("In Auth Guard");
      let isLoggedIn = localStorage.getItem("isLoggedIn");
      if(isLoggedIn == "true" && localStorage.getItem("username")){
        return true;
      }else{;
        return false;
      }
    
  }
  
}
