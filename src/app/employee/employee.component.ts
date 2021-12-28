import { Component, OnInit, PipeTransform} from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Router } from '@angular/router';

interface data{

id: number;
name: string;
department: string;
salary: number;
joining_date: string;
attendance: string;
};

const EMPLOYEE : data[]=[
   {

    "id": 11,
    "name": "Ash",
    "department": "Finance",
    "joining_date": "08/10/2016",
    "salary": 25000,
    "attendance": "present"
},
{"id": 12,"name": "John","department": "HR","joining_date": "18/01/2011","salary": 22300,"attendance": "present"
},
{ "id": 13, "name": "Zuri", "department": "Operations", "joining_date": "28/11/2019","salary": 36500,"attendance": "present"},
{"id": 14,  "name": "Vish",  "department": "Development",   "joining_date": "07/07/2017","salary": 24500,"attendance": "present"},
{ "id": 15, "name": "Barry",  "department": "Operations", "joining_date": "19/08/2014","salary": 55500,"attendance": "present"},
{"id": 16,"name": "Ady",  "department": "Finance",  "joining_date": "05/10/2014","salary": 65000,"attendance": "present"}, 
{ "id": 17,"name": "Gare","department": "Development",  "joining_date": "06/04/2014","salary": 25000,"attendance": "present"},
{ "id": 18,  "name": "Hola",  "department": "Development",  "joining_date": "08/12/2010","salary": 31250,"attendance": "present"}, 
{"id": 19,  "name": "Ola",  "department": "HR",  "joining_date": "07/05/2011","salary": 25000,"attendance": "present"},
{ "id": 20,  "name": "Kim",  "department": "Finance",  "joining_date": "20/10/2010","salary": 38000,"attendance": "present"},
{ "id": 21,  "name": "jim",  "department": "HR",  "joining_date": "25/10/2010","salary": 40000,"attendance": "present"},
];



@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],

})


export class EmployeeComponent implements OnInit {
  
  searchText:any;
  data = EMPLOYEE;
  page = 4;
  currentPage = 1;
  itemsPerPage = 5;
  pageSize: number;

  constructor(private router: Router) {

   }
  

  public onPageChange(pageNum: number): void {
    this.pageSize = this.itemsPerPage*(pageNum - 1);
  }
  
  public changePagesize(num: number): void {
  this.itemsPerPage = this.pageSize + num;
  }


  ngOnInit(): void {
      
   }
   
    onSelect(department: any){
  this.router.navigate(['/employee-component', department.id,department.name,department.department,department.salary,department.attendance]);
        
      }
  



}


