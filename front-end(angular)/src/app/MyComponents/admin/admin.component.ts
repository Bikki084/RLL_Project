import { Component, OnInit } from '@angular/core';
import { Admin } from 'src/app/classes/admin';
import { LoginadminService } from 'src/app/services/loginadmin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  admin:Admin = new Admin();
  constructor(private loginadminservice: LoginadminService) { }

  ngOnInit(): void {
  }

  adminLogin(){
    console.log(this.admin)
    this.loginadminservice.adminLogin(this.admin).subscribe(data=>{
      alert("Admin LoggedIn Succefully");


    }, error=>alert("sorry please enter correct username and password!"));
  
  }

}
