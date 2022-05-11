import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/admin/students';

  public registerStudent(studentData: any) {
    return this.http.post(this.API, studentData);
  }

  public getStudent(){
    return this.http.get(this.API);
  }

  public deleteStudent(susername: string) {
    return this.http.delete(`${this.API}/${susername}`).subscribe();
  }

  public updateStudents(student: any) {
    return this.http.put(this.API, student);
  }
}
