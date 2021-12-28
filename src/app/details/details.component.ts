import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
@Component({
  selector: 'app-details',
  template: `
  
    <div class="card">
  <img src="https://www.w3schools.com/howto/img_avatar2.png" alt="Avatar" style="width:auto%" >
  <div class="container">
    <h3><b>ID: {{ user.id }}</b></h3> 
    <h4><b>Name: {{ user.name }}</b></h4>
    <h4><b>Salary: {{ user.salary }}</b></h4> 
    <h4><b>Department: {{ user.department }}</b></h4> 
    <h4><b>Attendance: {{ user.attendance }}</b></h4> 

  </div>
</div>

  `,
  styleUrls: ['./details.component.css'],
})

export class DetailsComponent implements OnInit {
     user:{id: string; name: string; salary: number; department: string; attendance: string;};

  constructor( private route: ActivatedRoute) { }

  ngOnInit(): void {

     this.user = {

      id: this.route.snapshot.params['id'],
      name: this.route.snapshot.params['name'],
      salary: this.route.snapshot.params['salary'],
      department: this.route.snapshot.params['department'],
      attendance: this.route.snapshot.params['attendance'],


    };    

  }

}
