import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesc',
  templateUrl: './pipesc.component.html',
  styleUrls: ['./pipesc.component.css']
})
export class PipescComponent implements OnInit {

courseName:string;
now=new Date();
prod:any ={"pid":"101","pname":"marker","price":"50"}
weeks:string[]=["sunday","monday","tuesday"]
   
  constructor() {
    this.courseName="Angularjs"
   }

  ngOnInit() {
  }

}
