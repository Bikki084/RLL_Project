import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyservService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/faculty/timetable';

  public getTimetable(){
    return this.http.get(this.API);
  }

}
