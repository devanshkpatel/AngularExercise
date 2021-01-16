import { Component, OnInit } from '@angular/core';
import { StudentServiceService } from '../student-service.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class STUDENTComponent implements OnInit {

  a:any;

  constructor(private b:StudentServiceService) {

   }

  ngOnInit(): void {
    this.a = this.b.getData();
  }

}
