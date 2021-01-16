import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() value: string = '';
  @Output() value2 = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  getnew(){
    this.value2.emit('Neo');
  }

}
