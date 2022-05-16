import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FacultyService } from '../../services1/faculty.service';

@Component({
  selector: 'app-facultyactions',
  templateUrl: './facultyactions.component.html',
  styleUrls: ['./facultyactions.component.css']
})
export class FacultyactionsComponent implements OnInit {


  facultyDetails = null as any;
  facultyToUpdate = {
    fusername: "",
    fpassword: "",
  }


  constructor(private facultyservice: FacultyService, private activatedroute: ActivatedRoute) {
    this.getFacultyDetails();
   }
  ausername="";
  ngOnInit(): void {
    this.ausername = this.activatedroute.snapshot.paramMap.get('ausername') as string;
  }

  register(registerForm: NgForm) {
    this.facultyservice.registerFaculty(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Faculty data added successfully");
        registerForm.reset();
        this.getFacultyDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }



  getFacultyDetails() {
    this.facultyservice.getFaculty().subscribe(
      (resp) => {
        console.log(resp);
        this.facultyDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteFaculty(fusername: string) {
    this.facultyservice.deleteFaculty(fusername);
    alert("Faculty data deleted succefully");
    this.getFacultyDetails();
  }

  edit(faculty: any) {
    console.log("edit button clicked");
    this.facultyToUpdate = faculty;
  }

  updateFaculty() {
    this.facultyservice.updateFaculty(this.facultyToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getFacultyDetails();
      },
      (err) => {
        console.log(err);
      }
    );
    

    }

}
