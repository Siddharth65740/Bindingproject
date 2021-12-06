import { Component, OnInit } from '@angular/core';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css']
})
export class TemplateDrivenFormComponent implements OnInit {
  msg:string="";
  constructor() { }

  ngOnInit(): void {
  }
  checkUser(loginformref:NgForm){
    let login=loginformref.value;
    if(login.user=="Siddharth" && login.pass=="12345"){
      this.msg="Login Successfully";
    }
    else{
      this.msg="Invalid username and password";
    }
    loginformref.reset();
  }
}
