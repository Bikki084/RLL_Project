import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class LoginstudentService {
  private baseUrl = "http://localhost:8081/student/login";

  constructor(private httpClient:HttpClient) { }

  studentLogin(student:Student):Observable<object>  {
    console.log(student)
    return this.httpClient.post(`${this.baseUrl}`, student);
  }
}
