import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  x = 50;
  like = false;
  
  constructor() {
  }

  ngOnInit(): void { 
  }
  click(){
    if(this.like){
      this.x--;
    }
    else{
      this.x++;
    }
    this.like=!this.like;
  }

}
