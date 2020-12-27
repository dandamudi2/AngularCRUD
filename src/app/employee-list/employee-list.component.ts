import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IEmployee } from '../Models/Employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {
  
   employees:IEmployee[];
  constructor(private employeeService:EmployeeService) { }

  ngOnInit(){
    this.getEmployees();
  }

  getEmployees(){
     
      this.employeeService.getEmployess().subscribe((data:IEmployee[])=>
       this.employees =data
      )
       console.log(this.employees);
  }

  deleteEmployee(id:number){
    console.log(id);
      this.employeeService.deleteEmployee(id).subscribe(()=>{

      });
  }

}
