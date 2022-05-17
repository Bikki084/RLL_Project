import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TimetableService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8081/admin/timetable';

  public registerTimetable(timetableData: any) {
    return this.http.post(this.API, timetableData);
  }

  public getTimetable(){
    return this.http.get(this.API);
  }

  public deleteTimetable(timetableId: number) {
    return this.http.delete(`${this.API}/${timetableId}`).subscribe();
  }

}
