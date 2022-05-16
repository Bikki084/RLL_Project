import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  constructor(private http: HttpClient) { }
  API = 'http://localhost:8081/admin/library';

  public registerLibrary(libraryData: any) {
    return this.http.post(this.API, libraryData);
  }

  public getLibrary(){
    return this.http.get(this.API);
  }

  public deleteLibrary(lusername: string) {
    return this.http.delete(`${this.API}/${lusername}`).subscribe();
  }

  public updateLibrary(library: any) {
    return this.http.put(this.API, library);
  }
}
