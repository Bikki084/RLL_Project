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
      // console.log(JSON.stringify(data) + "test passed");
      // Array.from(this.props.json).map(row => <RowRender key={id.row} row={row} />)

      let myMap = new Map(Object.entries(JSON.stringify(data)));
      const map = new Map(Object.entries(data));
      console.log("this test")
      // console.log(Object.fromEntries([...map]));
      // for(let key of map.forEach())


      console.log([...map.entries()]);  //to print the data in key values pair from api

      map.forEach(function (Key, value) {
        console.log(value + " = "+ Key);
      });

      if (data != null) {
        // console.log(data);
        this.router.navigate(['/admin-dashboard']);
      }
    },
      error => alert("sorry please enter correct username and password!"));
  }
}