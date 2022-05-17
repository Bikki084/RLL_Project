import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../servicesl/books.service';

@Component({
  selector: 'app-viewbooks',
  templateUrl: './viewbooks.component.html',
  styleUrls: ['./viewbooks.component.css']
})
export class ViewbooksComponent implements OnInit {
  bookDetails = null as any;
  constructor(private activatedroute: ActivatedRoute, private bookservice: BooksService) { }
  susername="";
  ngOnInit(): void {
    this.susername = this.activatedroute.snapshot.paramMap.get('susername') as string;
    this.getBookDetails();
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

}
