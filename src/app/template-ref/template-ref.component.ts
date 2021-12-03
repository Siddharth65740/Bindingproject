import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-template-ref',
  templateUrl: './template-ref.component.html',
  styleUrls: ['./template-ref.component.css']
})
export class TemplateRefComponent implements OnInit {
  msg:string="";
  sum:number=0;
  constructor() { }

  ngOnInit(): void {
  }
  passValue(nameref:any){
    console.log(nameref.value);
    nameref.style.backgroundColor="yellow";
    this.msg=`Welcome ${nameref.value}`;
    nameref.value="";
  }

  addValue(n1:any,n2:any){
    this.sum=parseInt(n1.value)+parseInt(n2.value);
    n1.value="";
    n2.value="";
  }
}
