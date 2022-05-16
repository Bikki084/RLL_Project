import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-faculty-dashboard',
  templateUrl: './faculty-dashboard.component.html',
  styleUrls: ['./faculty-dashboard.component.css']
})
export class FacultyDashboardComponent implements OnInit {

  constructor(private router: Router, private activatedrout: ActivatedRoute) { }

  fusername="";

  ngOnInit(): void {
    this.fusername = this.activatedrout.snapshot.paramMap.get('fusername') as string;
  }

  facultyLogout(){
    this.router.navigate(['/faculty'])
  }

}
