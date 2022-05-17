import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-viewresult',
  templateUrl: './viewresult.component.html',
  styleUrls: ['./viewresult.component.css']
})
export class ViewresultComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute) { }
  susername="";
  ngOnInit(): void {
    this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
  }

}
