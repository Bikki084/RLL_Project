import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css'],
})
export class StudentDashboardComponent implements OnInit {


 @Input() name="";
  constructor(private router: Router, private activatedrout: ActivatedRoute) { }
  susername="";

  ngOnInit(): void {
    this.susername = this.name;
     this.susername = this.activatedrout.snapshot.paramMap.get('susername') as string;
  }

  studentLogout(){
    this.router.navigate(['/student']);
  }

}
