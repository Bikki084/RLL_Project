import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { StudentService } from '../../services1/student.service';

@Component({
  selector: 'app-studentactions',
  templateUrl: './studentactions.component.html',
  styleUrls: ['./studentactions.component.css']
})
export class StudentactionsComponent implements OnInit {

  studenDetails = null as any;
  studentToUpdate = {
    susername: "",
    spassword: "",
    name: "",
    contact_no: "",
    stream: "",
    batch: "",
    parent_details: ""
  }

  constructor(private studentservice: StudentService, private router: Router) {
    this.getStudentDetails();
  }

  ngOnInit(): void {
  }

  register(registerForm: NgForm) {
    this.studentservice.registerStudent(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Student data added successfully");
        registerForm.reset();
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getStudentDetails() {
    this.studentservice.getStudent().subscribe(
      (resp) => {
        console.log(resp);
        this.studenDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteStudent(susername: string) {
    this.studentservice.deleteStudent(susername);
    alert("Student data deleted succefully");
    this.getStudentDetails();
  }

  edit(studuent: any) {
    console.log("edit button clicked");
    this.studentToUpdate = studuent;
  }

  updateStudent() {
    this.studentservice.updateStudents(this.studentToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getStudentDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    

    }
  }
