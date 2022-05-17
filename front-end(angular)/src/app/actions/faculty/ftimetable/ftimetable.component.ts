import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TimetableService } from '../../services1/timetable.service';

@Component({
  selector: 'app-ftimetable',
  templateUrl: './ftimetable.component.html',
  styleUrls: ['./ftimetable.component.css']
})
export class FtimetableComponent implements OnInit {
  timetableDetails = null as any;
  constructor(private timetableservice: TimetableService, private activatedroute: ActivatedRoute) {
    this.getTimetableDetails();
  }

  fusername = "";
  ngOnInit(): void {
    this.fusername = this.activatedroute.snapshot.paramMap.get('fusername') as string;
  }

  getTimetableDetails() {
    this.timetableservice.getTimetable().subscribe(
      (resp) => {
        console.log(resp);
        this.timetableDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

}
