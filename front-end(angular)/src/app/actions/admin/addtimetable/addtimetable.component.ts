import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { TimetableService } from '../../services1/timetable.service';

@Component({
  selector: 'app-addtimetable',
  templateUrl: './addtimetable.component.html',
  styleUrls: ['./addtimetable.component.css']
})
export class AddtimetableComponent implements OnInit {

  timetableDetails = null as any;
  constructor(private timetableservice: TimetableService, private activatedroute: ActivatedRoute) {
    this.getTimetableDetails();
  }

  ausername="";
  ngOnInit(): void {
    this.ausername = this.activatedroute.snapshot.paramMap.get('ausername') as string;
  }

  register(registerForm: NgForm) {
    this.timetableservice.registerTimetable(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Book data added successfully");
        registerForm.reset();
        this.getTimetableDetails();
      },
      (err) => {
        console.log(err);
      }
    );
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

  deleteTimetable(timetableId: number) {
    this.timetableservice.deleteTimetable(timetableId);
    alert("Timetable data deleted succefully");
    this.getTimetableDetails();
  }
}
