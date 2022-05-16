import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Faculty } from 'src/app/classes/faculty';
import { LoginfacultyService } from 'src/app/services/loginfaculty.service';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {


  faculty: Faculty = new Faculty();
  constructor(private loginfacultyservice: LoginfacultyService, private router: Router) { }

  ngOnInit(): void {
  }

  facultyLogin() {
    console.log(this.faculty);
    this.loginfacultyservice.facultyLogin(this.faculty).subscribe(data => {
      alert("Faculty loggedIn successully");
      if(data!=null){
        let username = data.fusername;
        this.router.navigate(['/faculty-dashboard', username])
      }
    }, error => alert("sorry please enter correct username and password!"));
  };

}
