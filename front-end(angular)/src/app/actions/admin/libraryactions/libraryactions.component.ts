import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { LibraryService } from '../../services1/library.service';

@Component({
  selector: 'app-libraryactions',
  templateUrl: './libraryactions.component.html',
  styleUrls: ['./libraryactions.component.css']
})
export class LibraryactionsComponent implements OnInit {
  libraryDetails = null as any;
  libraryToUpdate = {
    lusername: "",
    lpassword: "",
  }
  constructor(private libraryservice: LibraryService, private activatedroute: ActivatedRoute) { this.getLibraryDetails(); }
  ausername="";
  ngOnInit(): void {
    this.ausername = this.activatedroute.snapshot.paramMap.get('ausername') as string;
  }
  register(registerForm: NgForm) {
    this.libraryservice.registerLibrary(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Librarian data added successfully");
        registerForm.reset();
        this.getLibraryDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }



  getLibraryDetails() {
    this.libraryservice.getLibrary().subscribe(
      (resp) => {
        console.log(resp);
        this.libraryDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }


  deleteLibrary(lusername: string) {
    this.libraryservice.deleteLibrary(lusername);
    alert("Librarian data deleted succefully");
    this.getLibraryDetails();
  }

  edit(library: any) {
    console.log("edit button clicked");
    this.libraryToUpdate = library;
  }

  updateLibrary() {
    this.libraryservice.updateLibrary(this.libraryToUpdate).subscribe(
      (resp) => {
        console.log(resp);
        this.getLibraryDetails();
      },
      (err) => {
        console.log(err);
      }
    );


  }
}
