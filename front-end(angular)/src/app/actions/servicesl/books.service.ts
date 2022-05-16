import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/library/books';

  
  public registerBook(bookData: any) {
    return this.http.post(this.API, bookData);
  }

  public getBook(){
    return this.http.get(this.API);
  }

  public deleteStudent(book_id: number) {
    return this.http.delete(`${this.API}/${book_id}`).subscribe();
  }
}


