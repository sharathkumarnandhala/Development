import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: '   ',
  templateUrl: './emp-component.component.html',
  styleUrls: ['./emp-component.component.css']
})
export class EmpComponentComponent implements OnInit {

  constructor(private ang:EmployeeService) { 

  }

  ngOnInit() {
    this.ang.getDetails();
  }

}
