import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  ausername="";
  ngOnInit(): void {
    this.ausername = this.activatedroute.snapshot.paramMap.get('ausername') as string;
  }

}
