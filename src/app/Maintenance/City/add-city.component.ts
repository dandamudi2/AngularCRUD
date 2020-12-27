import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { City } from 'src/app/Models/city';
import { Country } from 'src/app/Models/country';


@Component({
  selector: 'app-add-city',
  templateUrl: './add-city.component.html',
  styleUrls: ['./add-city.component.css']
})
export class AddCityComponent implements OnInit {
  photoPath:string;
  showPreview =false;
  gender="Male";
 
   city: City={
         name:null,
         country:null
   };


   

  countries: Country[] =[
    {id:1, name:"Malaysia"},
    {id:2, name:"India"},
    {id:3, name:"USA"},
    {id:3, name:"Vietnam"}
  ];
 
  constructor() { }

  ngOnInit(): void {
  }

  SaveCity(city: City){
    console.log(city);
  }

  ShowPreviewImage()
  {
     this.showPreview = !this.showPreview;
  }

}
