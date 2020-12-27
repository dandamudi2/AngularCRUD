import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './employee-details/employee-details.component';
import { EmployeeService } from './services/employee.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';

import { RouterModule,Routes } from '@angular/router';
import { CreateEmployeeComponent } from './create-employee/create-employee.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddCityComponent } from './Maintenance/City/add-city.component';

import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const routes :Routes = [
  { path:'CreateEmployee', component: CreateEmployeeComponent },
  { path: 'EmployeeList', component: EmployeeListComponent },
  { path: '', redirectTo: '/EmployeeList' , pathMatch:'full' },
  { path: 'addCity', component: AddCityComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    EmployeeListComponent,
    EmployeeDetailsComponent,
    NavComponent,
    CreateEmployeeComponent,
    AddCityComponent
   
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    RouterModule.forRoot(routes),
    BsDatepickerModule.forRoot(),
    BrowserAnimationsModule
    
  ],
  exports: [RouterModule],
  providers: [
    EmployeeService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
