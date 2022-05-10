import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Adminstudent } from './adminstudent';

@Injectable({
  providedIn: 'root'
})
export class AdminstudentserviceService {

  private baseURL = "http://localhost:8081/admin/students";


  constructor(private httpClient: HttpClient) { }

  getAdminstudentList(): Observable<Adminstudent[]> {
    return this.httpClient.get<Adminstudent[]>(`${this.baseURL}`);
  }

  createStudent(adminstudent: Adminstudent): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, adminstudent);
  }

  getStudentByUsername(susername: string): Observable<Adminstudent> {
    return this.httpClient.get<Adminstudent>(`${this.baseURL}/${susername}`);
  }

  updateAdminstudent(adminstudent: Adminstudent): Observable<Object> {
    return this.httpClient.put<Adminstudent>(`${this.baseURL}`, adminstudent);

  }
}
