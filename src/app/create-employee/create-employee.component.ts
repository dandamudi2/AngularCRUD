import { Component, OnInit } from '@angular/core';
import { FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { IEmployee } from '../Models/Employee';
import { EmployeeService } from '../services/employee.service';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  employeeForm:any;
  showPreview=false;
   bsdatepickerconfig: Partial<BsDatepickerConfig>

  constructor(private formbulider: FormBuilder,
    private employeeService:EmployeeService,
    private router: Router) { 
      this.bsdatepickerconfig = Object.assign({},
         {
            containerClass:'theme-dark-blue',
            showWeekNumbers:false,
            dateInputFormat: 'DD/MM/YYYY'
         }
        );
    }

  ngOnInit(): void {
    this.employeeForm = this.formbulider.group({  
      firstName: ['', [Validators.required]],  
      lastName: ['', [Validators.required]],  
      address: ['', [Validators.required]],  
      city: ['', [Validators.required]],  
      email: ['', [Validators.required]]
      
      
    });  
  }

  OnFormSubmit(){

    const employee = this.employeeForm.value;

    this.SaveEmployee(employee);
  }

  SaveEmployee(employee: IEmployee){
         console.log(employee);
    this.employeeService.saveEmployee(employee).subscribe((data:IEmployee)=>{
       employee = data;
    });

    this.router.navigate(['/EmployeeList']);



  }

  Cancel(){
    this.router.navigate(['/CreateEmployee']);
  }

  

}
