import { Component, OnInit, Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UserLogin } from '../user-login';
import { LoginServiceService } from '../login-service.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Injectable({
  providedIn: 'root'
})
export class LoginComponent implements OnInit {

  public isValid : boolean; 
  public errorMessage : string;
  

  constructor(private route : Router, private activatedRoute: ActivatedRoute,
    private loginService: LoginServiceService) { }

  userLogin = new UserLogin('','');
  ngOnInit() {
  }

  onLoginClick(){
    
    let name= this.userLogin.userName;
    this.loginService.validateUser(this.userLogin)
   .subscribe(
     data => {console.log("Success", data);
        if(data){
          debugger;
         
          localStorage.setItem("isLoggedIn" , "true");
          localStorage.setItem("username" , name);
          this.route.navigate(["/home",{userName: name}], {relativeTo : this.activatedRoute});
        }else{
            this.route.navigate(["**"]);
        }},
     error => this.errorMessage = error.statusText
    )
  }

}
