import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentServiceService {

  a = [{​name:'Ashwin'​​,Maths:79​​​​, Physics:65, Chemistry:54​​},
  {​​name:'Jadeja',Maths:64​​​​,​​Physics:45,Chemistry:67}];

  constructor() { }
  getData(){
    return this.a;
  }
}
