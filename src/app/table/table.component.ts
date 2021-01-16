import { Component, OnInit } from '@angular/core';


export interface table{
  image: string;
  ProductName: string;
  ProductCode: number;
  BranchName: string;
  BranchCode: number;
  ShippingAddress: string;
  
}
let table_data: table[] = [
  {
    image: 'https://picsum.photos/200',
    ProductName: 'Iphone',
    ProductCode: 7777,
    BranchName: 'ahmedabad',
    BranchCode: 3456,
    ShippingAddress: 'abc xyz',

  },
  {
    image: 'https://picsum.photos/200',
    ProductName: 'laptop',
    ProductCode: 1234,
    BranchName: 'kalol',
    BranchCode: 8989,
    ShippingAddress: 'hhh iii',

  },
  {
    image: 'https://picsum.photos/200',
    ProductName: 'headphone',
    ProductCode: 8765,
    BranchName: 'gandhinagar',
    BranchCode: 7383,
    ShippingAddress: 'ttt bbb',

  }

];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  data=table_data;
  text:string='';
    
  constructor() {
  }

  ngOnInit(): void {
  }
  getData(i:number){
    alert(
      'Product name: '+ this.data[i].ProductName + '\nProduct code: '+ this.data[i].ProductCode +
      '\nBranch name: '+ this.data[i].BranchName + '\nBranch code: '+ this.data[i].BranchCode +
      '\nAddress: '+ this.data[i].ShippingAddress
    );
  }
}
