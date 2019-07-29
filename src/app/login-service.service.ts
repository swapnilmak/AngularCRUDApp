import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  public _url = "http://localhost:9090/restApi/login";
  
 

  constructor(private http: HttpClient) { }

  validateUser(userLogin){
    var json = JSON.stringify(userLogin);

    return this.http.get<boolean>(this._url +'?userObj='+encodeURIComponent(json));
  }
}
