import { Component, OnInit } from '@angular/core';
import {FormControl, Validators,FormGroup} from "@angular/forms";

@Component({
  selector: 'app-model-driven-form',
  templateUrl: './model-driven-form.component.html',
  styleUrls: ['./model-driven-form.component.css']
})
export class ModelDrivenFormComponent implements OnInit {
    msg:string="";
    loginRef=new FormGroup({
      user: new FormControl("",[Validators.required,Validators.minLength(2)]),
      pass:new FormControl("",[Validators.required]),
    });
  constructor() { }

  ngOnInit(): void {
  }

  checkUser(){
    let login=this.loginRef.value;
    if(login.user=="sid" && login.pass=="12345"){
      this.msg="Login Successfully";
    }
    else{
      this.msg="Invalid Credentials";
    }
  }

}
