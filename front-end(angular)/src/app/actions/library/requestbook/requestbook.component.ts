import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-requestbook',
  templateUrl: './requestbook.component.html',
  styleUrls: ['./requestbook.component.css']
})
export class RequestbookComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  lusername = "";
  ngOnInit(): void {
    this.lusername = this.activatedroute.snapshot.paramMap.get('lusername') as string;
  }

}
