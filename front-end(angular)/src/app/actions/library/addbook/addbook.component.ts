import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../servicesl/books.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent implements OnInit {


  bookDetails = null as any;
  
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService ) {
    this.getBookDetails();
   }
  lusername="";
  ngOnInit(): void {
    this.lusername = this.activatedroute.snapshot.paramMap.get('lusername') as string;
  }

  register(registerForm: NgForm) {
    this.bookservice.registerBook(registerForm.value).subscribe(
      (resp) => {
        console.log(resp);
        alert("Book data added successfully");
        registerForm.reset();
        this.getBookDetails();
      },
      (err) => {
        console.log(err);
      }
    );
  }

  getBookDetails() {
    this.bookservice.getBook().subscribe(
      (resp) => {
        console.log(resp);
        this.bookDetails = resp;
      },
      (err) => {
        console.log(err);
      }
    );
  }

  deleteBook(book_id: number) {
    this.bookservice.deleteStudent(book_id);
    alert("Book data deleted succefully");
    this.getBookDetails();
  }
}
