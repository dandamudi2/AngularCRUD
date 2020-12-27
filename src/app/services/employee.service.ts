import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IEmployee } from '../Models/Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  baseUrl:any;
 
  constructor(private http:HttpClient) { 

    this.baseUrl = "https://localhost:44309/";
  }

  getEmployess(){
   return this.http.get(this.baseUrl+'api/Employee/GetEmployees')
    .pipe(map(
         response => {
         
           return response;
         }))
  }

  saveEmployee(employee:IEmployee):Observable<IEmployee>{

    return this.http.post<IEmployee>(this.baseUrl+'api/Employee/SaveEmployee',employee);
  }

  deleteEmployee(Id:number): Observable<number>{
   return this.http.delete<number>(this.baseUrl+"api/Employee/DeleteEmployee/"+Id);
  }
}
