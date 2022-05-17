import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ViewbookService } from '../../services1/viewbook.service';

@Component({
  selector: 'app-viewbook',
  templateUrl: './viewbook.component.html',
  styleUrls: ['./viewbook.component.css']
})
export class ViewbookComponent implements OnInit {
  bookDetails = null as any;
  constructor(private activatedroute: ActivatedRoute, private viewbookservice: ViewbookService) { }
  
  ausername="";
  ngOnInit(): void {
    this.ausername = this.activatedroute.snapshot.paramMap.get('ausername') as string;
    this.getBookDetails();
  }

  
  getBookDetails() {
    this.viewbookservice.getBook().subscribe(
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
