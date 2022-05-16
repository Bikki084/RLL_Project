import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Student } from 'src/app/classes/student';
import { LoginstudentService } from 'src/app/services/loginstudent.service';

@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.css']
})
export class MyprofileComponent implements OnInit {
  

  constructor(private activatedroute: ActivatedRoute, private studentService: LoginstudentService) { }
  susername="";
  student: Student = new Student();
  ngOnInit(): void {
  this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
  this.studentService.getStudentBySusername(this.susername).subscribe(data=>{
    this.student=data;
    console.log(data, this.student);
  })
  }

}
