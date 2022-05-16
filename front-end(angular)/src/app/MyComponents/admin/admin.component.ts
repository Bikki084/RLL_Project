// this is the ts file 
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { Admin } from 'src/app/classes/admin';
import { LoginadminService } from 'src/app/services/loginadmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {


  admin: Admin = new Admin();

  constructor(private loginadminservice: LoginadminService, private router: Router) { }

  ngOnInit(): void {
  }


  adminLogin() {
    console.log(this.admin);
    this.loginadminservice.adminLogin(this.admin).subscribe(data => {
      alert("Admin LoggedIn Succefully");
      
      if (data != null) {
        // console.log(data);
        let username = data.ausername;
        this.router.navigate(['/admin-dashboard', username]);
      }
    },
      error => alert("sorry please enter correct username and password!"))
    };

  }