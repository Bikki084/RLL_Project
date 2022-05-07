import { Component, OnInit } from '@angular/core';
import { Student } from 'src/app/classes/student';
import { LoginstudentService } from 'src/app/services/loginstudent.service';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  student: Student = new Student();
  constructor(private studentloginservice:LoginstudentService) { }

  ngOnInit(): void {
  }

  studentLogin(){
    console.log(this.student);
    this.studentloginservice.studentLogin(this.student).subscribe(data=>{
      alert("Student LoggedIn Successfully"); 
    }, error=>alert("sorry please enter correct username and password!"))
  }

}
