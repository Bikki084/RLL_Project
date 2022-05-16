import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-issuebook',
  templateUrl: './issuebook.component.html',
  styleUrls: ['./issuebook.component.css']
})
export class IssuebookComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  lusername = "";
  ngOnInit(): void {
    this.lusername = this.activatedroute.snapshot.paramMap.get('lusername') as string;
  }

}
