import { Component, OnInit } from '@angular/core';

import {Employee} from "../employee.model";
import {EmployeeService} from "../employee-service.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  //employeeList : Employee[];

  constructor() { }


  private employeeList : Employee[] = [
    { 
      name: "employee-1",
      id: 1,
      image: "https://www.honeywell.com/-/media/Honeywell_com/Images/Industry-Slider/Aerospace.png"
    },
    { 
      name: "employee-2",
      id: 2,
      image: "https://www.honeywell.com/-/media/Honeywell_com/Images/Industry-Slider/Aerospace.png"
    },
    { 
      name: "employee-3",
      id: 3,
      image: "https://www.honeywell.com/-/media/Honeywell_com/Images/Industry-Slider/Aerospace.png"
    }
  ]

  ngOnInit() : void {
    //this.employeeList = this.employeeService.list();
  }

}
