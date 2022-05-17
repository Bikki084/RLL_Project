import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-returnbook',
  templateUrl: './returnbook.component.html',
  styleUrls: ['./returnbook.component.css']
})
export class ReturnbookComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  lusername = "";
  ngOnInit(): void {
    this.lusername = this.activatedroute.snapshot.paramMap.get('lusername') as string;
  }

}
