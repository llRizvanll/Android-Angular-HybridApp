import { Injectable } from '@angular/core';
import {Employee} from './employee.model';

@Injectable()
export class EmployeeService {
  constructor() { }

  private employeeList : Employee[] = [
    { 
      name: "employee-1",
      id: 1,
      image: ""
    }
  ]
  list(){
    return this.employeeList;
  }
}
