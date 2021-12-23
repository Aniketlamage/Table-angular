import { Component } from '@angular/core';

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
{"id": 12,"name": "John","department": "HR","joining_date": 18/1/2011,"salary": 25000},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": 28/11/2019,"salary": 25000},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": 7/7/2017,"salary": 25000},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": 19/8/2014,"salary": 25000},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": 5/10/2014,"salary": 25000}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": 6/4/2014,"salary": 25000},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": 8/12/2010,"salary": 25000}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": 7/5/2011,"salary": 25000},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": 20/10/2010,"salary": 25000}];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basics';
  data = EMPLOYEE;
}
