import { Component, OnInit } from '@angular/core';
import { Library } from 'src/app/classes/library';
import { LoginlibraryService } from 'src/app/services/loginlibrary.service';

@Component({
  selector: 'app-librarian',
  templateUrl: './librarian.component.html',
  styleUrls: ['./librarian.component.css']
})
export class LibrarianComponent implements OnInit {

  
  library: Library = new Library();
  constructor(private loginlibraryservice: LoginlibraryService) { }

  ngOnInit(): void {
  }

  libraryLogin(){
    console.log(this.library);
    this.loginlibraryservice.libraryLogin(this.library).subscribe(data=>{
      alert("Librarian LoggedIn Successfully"); 
    }, error=>alert("sorry please enter correct username and password!"))
  }

}
