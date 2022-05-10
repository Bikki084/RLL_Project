import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Adminstudent } from '../adminstudent';
import { AdminstudentserviceService } from '../adminstudentservice.service';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css']
})
export class UpdatestudentComponent implements OnInit {

  susername!: string
  adminstudent: Adminstudent = new Adminstudent();
  admindisplaystudent!: Adminstudent;
  constructor(private adminstudentService: AdminstudentserviceService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    // this.admindisplaystudent = this.router.getCurrentNavigation().extras.state.student
    // console.log(this.router.getCurrentNavigation().extras.state.example);
    this.adminstudentService.getStudentByUsername(this.susername).subscribe(data => {
      this.adminstudent = data;
    }, error => console.log(error));
  }


  onSubmit() {
    this.adminstudentService.updateAdminstudent(this.admindisplaystudent).subscribe(data => {
      alert("Data Updated");
      this.router.navigate(['admin/student-actions/student-list']);
    })
  }

}
