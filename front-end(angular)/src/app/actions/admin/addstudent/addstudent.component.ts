import { Component, OnInit } from '@angular/core';
import { Adminstudent } from '../adminstudent';
import { AdminstudentserviceService } from '../adminstudentservice.service';

@Component({
  selector: 'app-addstudent',
  templateUrl: './addstudent.component.html',
  styleUrls: ['./addstudent.component.css']
})
export class AddstudentComponent implements OnInit {

  adminstudent: Adminstudent = new Adminstudent();

  constructor(private adminstudentservice: AdminstudentserviceService) { }
  ngOnInit(): void {
  }

  saveAdminstudent(){
    this.adminstudentservice.createStudent(this.adminstudent).subscribe(data=>{
      console.log(data);
      if(data!=null){
        alert("Student details added");
      }
      else{
        alert("Please add Student details");
      }
    },
    errro=>console.log(errro));
  }

  onSubmit(){
    console.log("button clicked for form submission");
    console.log(this.adminstudent);
    this.saveAdminstudent();
    
  }

}
