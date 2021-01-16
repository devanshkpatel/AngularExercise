import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  Variable1 : string ='Angular';
  Variable2 : string ='';
  constructor() { }

  ngOnInit(): void {
  }
  getchild(c: string){
    this.Variable2 = 'This is the Parent component. I received a string ' +c+ ' from the Child component. Click me to see the effect ' + c;
  }
}
