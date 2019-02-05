import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  eno:number;

  constructor() {
    this.eno=100;
   }
  getDetails(){
    console.log("employee Details are:");
    console.log("Employee Number"+this.eno);
  }

}
