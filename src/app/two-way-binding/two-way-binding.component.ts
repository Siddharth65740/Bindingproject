import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-two-way-binding',
  templateUrl: './two-way-binding.component.html',
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
  age:number=23;
  no1:number=0;
  no2:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
