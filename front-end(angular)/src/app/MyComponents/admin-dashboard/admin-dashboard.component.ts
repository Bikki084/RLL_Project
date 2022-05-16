import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  @Input() ausername='';
  constructor(private router: Router, private activatedrout: ActivatedRoute) { }
  // ausername = "";

  ngOnInit(): void {
  this.ausername = this.activatedrout.snapshot.paramMap.get('ausername') as string;
  }

  adminLogout(){
    this.router.navigate(['/admin']);
  }
}
