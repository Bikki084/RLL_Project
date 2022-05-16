import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../classes/library';

@Injectable({
  providedIn: 'root'
})
export class LoginlibraryService {

  sendLibrary(lusername: string) {
    throw new Error('Method not implemented.');
  }
  
  private baseUrl = "http://localhost:8081/library/login";


  constructor(private httpClient: HttpClient) { }
  libraryLogin(library: Library): Observable<Library> {
    console.log(library)
    return this.httpClient.post<Library>(`${this.baseUrl}`, library);
  }
}
