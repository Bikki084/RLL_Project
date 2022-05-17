import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lviewevent',
  templateUrl: './lviewevent.component.html',
  styleUrls: ['./lviewevent.component.css']
})
export class LvieweventComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  lusername = "";
  ngOnInit(): void {
    this.lusername = this.activatedroute.snapshot.paramMap.get('lusername') as string;
  }

}
