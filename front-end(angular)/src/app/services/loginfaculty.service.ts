import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Faculty } from '../classes/faculty';

@Injectable({
  providedIn: 'root'
})
export class LoginfacultyService {
  private baseUrl = "http://localhost:8081/faculty/login";


  constructor(private httpClient:HttpClient) { }
  facultyLogin(faculty:Faculty):Observable<Faculty>  {
    console.log(faculty)
    return this.httpClient.post<Faculty>(`${this.baseUrl}`, faculty);
  }

}

