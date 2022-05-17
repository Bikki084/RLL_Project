import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewassignment',
  templateUrl: './viewassignment.component.html',
  styleUrls: ['./viewassignment.component.css']
})
export class ViewassignmentComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }

  susername="";
  ngOnInit(): void {
    this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
  }

}
