import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Employee } from '../_models/Employee';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.scss']
})
export class CreateemployeeComponent  {

  constructor(private data: DataService) { }
 

  model = new Employee("abc","abc","abc","abc","abc");

  submitted = false;

  onSubmit() { 
    this.submitted = true;
    this.data.addEmployee(this.model).subscribe(response=>console.log(response))
    console.log(this.model)
   }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }


}
