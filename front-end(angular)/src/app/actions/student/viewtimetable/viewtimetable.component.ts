import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { Timetable } from 'src/app/classes/timetable';
import { LoginstudentService } from 'src/app/services/loginstudent.service';

@Component({
  selector: 'app-viewtimetable',
  templateUrl: './viewtimetable.component.html',
  styleUrls: ['./viewtimetable.component.css']
})
export class ViewtimetableComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private studentService: LoginstudentService) { }
  student: Student = new Student();
  timetable: Timetable = new Timetable();
  susername="";
  ngOnInit(): void {
    this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
    this.studentService.getStudentBySusername(this.susername).subscribe(data=>{
      this.student=data;
      console.log(this.student);
      this.studentService.getTimetableByStream(this.student.stream).subscribe(data=>{
        this.timetable = data;
        console.log(data, this.timetable);
      });
    })
  }

}
