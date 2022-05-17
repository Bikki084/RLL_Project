import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewbookService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/admin/get/books';

  public getBook(){
    return this.http.get(this.API);
  }
}
