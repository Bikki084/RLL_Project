import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-librarian-dashboard',
  templateUrl: './librarian-dashboard.component.html',
  styleUrls: ['./librarian-dashboard.component.css']
})
export class LibrarianDashboardComponent implements OnInit {

  @Input() lusername="";
  constructor(private router: Router, private activatedrout: ActivatedRoute) { }
  // lusername = "";
  ngOnInit(): void {
    this.lusername = this.activatedrout.snapshot.paramMap.get('lusername') as string;
  }

  libraryLogout(){
    this.router.navigate(['/librarian']);
  }

}
