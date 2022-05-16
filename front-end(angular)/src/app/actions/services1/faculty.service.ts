import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {

  constructor(private http: HttpClient) { }

  API = 'http://localhost:8081/admin/faculty';

  public registerFaculty(facultyData: any) {
    return this.http.post(this.API, facultyData);
  }

  public getFaculty(){
    return this.http.get(this.API);
  }

  public deleteFaculty(fusername: string) {
    return this.http.delete(`${this.API}/${fusername}`).subscribe();
  }

  public updateFaculty(faculty: any) {
    return this.http.put(this.API, faculty);
  }

}
