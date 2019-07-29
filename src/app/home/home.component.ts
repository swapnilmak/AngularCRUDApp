import { Component, OnInit } from '@angular/core';
import { ActivatedRoute ,ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  username : string;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params: ParamMap) => {
      let name= params.get('userName');
      this.username = name;
    });
  }

  isNameValid(){
    debugger;
    if(this.username){
      return false;
    }
    return true;
    
  }

}
