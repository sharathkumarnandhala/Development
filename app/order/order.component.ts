import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {
  
 count:number;
  constructor() {
    this.count=0;
   }
 
   incr():void{
    this.count=this.count+1;
  }
  decr():void{
    this.count=this.count-1;
  }

  ngOnInit() {
  }

}
