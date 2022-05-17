import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewattendance',
  templateUrl: './viewattendance.component.html',
  styleUrls: ['./viewattendance.component.css']
})
export class ViewattendanceComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  susername="";
  ngOnInit(): void {
    this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
  }

}
