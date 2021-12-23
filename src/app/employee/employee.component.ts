import { Component, OnInit, PipeTransform } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';


interface data{

id: number;
name: string;
department: string;
salary: number;
joining_date: number;

};

const EMPLOYEE : data[]=[
   {

    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": 8/10/2016,
    "salary": 25000
},
{"id": 12,"name": "John","department": "HR","joining_date": 18/1/2011,"salary": 22300},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28/11/2019,"salary": 36500},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": 7/7/2017,"salary": 24500},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": 19/8/2014,"salary": 55500},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": 5/10/2014,"salary": 65000}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": 6/4/2014,"salary": 25000},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": 8/12/2010,"salary": 31250}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": 7/5/2011,"salary": 25000},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": 20/10/2010,"salary": 38000}];


function search(text: string, pipe: PipeTransform): data[] {
  return EMPLOYEE.filter(data => {
    const term = text.toLowerCase();
    return data.name.toLowerCase().includes(term)
        || pipe.transform(data.department).includes(term)
        || pipe.transform(data.salary).includes(term);
  });
}

@Component({
  selector: 'ngbd-app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
  providers: [DecimalPipe]

})
export class EmployeeComponent implements OnInit {
    
    data = EMPLOYEE;
  
 
  constructor() { }

  ngOnInit(): void {
  
  }


}

export class NgbdAppEmployee{

  employee$: Observable<data[]>;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe) {
    this.employee$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
}