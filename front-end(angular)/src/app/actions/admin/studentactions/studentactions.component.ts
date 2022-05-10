import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Adminstudent } from '../adminstudent';
import { AdminstudentserviceService } from '../adminstudentservice.service';

@Component({
  selector: 'app-studentactions',
  templateUrl: './studentactions.component.html',
  styleUrls: ['./studentactions.component.css']
})
export class StudentactionsComponent implements OnInit {

  adminstudents!: Adminstudent[];
  constructor(private adminstudentservice: AdminstudentserviceService, private router: Router) { }

  ngOnInit(): void {
    this.getAdminstudentList();
  }

  private getAdminstudentList(){
    this.adminstudentservice.getAdminstudentList().subscribe(data=>{
      this.adminstudents = data;
    });
  }

  updateAdminstudent(student: Adminstudent){
      this.router.navigate(['/admin/student-actions/student-update', { state: { example: 'student' } }]);
  }

}
