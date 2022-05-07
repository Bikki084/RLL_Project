import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Library } from '../classes/library';

@Injectable({
  providedIn: 'root'
})
export class LoginlibraryService {
  private baseUrl = "http://localhost:8081/library/login";

  
  constructor(private httpClient:HttpClient) { }
  libraryLogin(library:Library):Observable<object>  {
    console.log(library)
    return this.httpClient.post(`${this.baseUrl}`, library);
  }
}
