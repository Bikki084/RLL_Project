import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Student } from '../classes/student';

@Injectable({
  providedIn: 'root'
})
export class LoginstudentService {
  private baseUrl = "http://localhost:8081/student";

  constructor(private httpClient:HttpClient) { }

  studentLogin(student:Student):Observable<Student>  {
    console.log(student)
    return this.httpClient.post<Student>(`${this.baseUrl}/login`, student);
  }

  getStudentBySusername(susername:string):Observable<Student>{
    return this.httpClient.get<Student>(`${this.baseUrl}/get/${susername}`)
  }

}
