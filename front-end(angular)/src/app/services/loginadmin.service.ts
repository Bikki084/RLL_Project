import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admin } from '../classes/admin';

@Injectable({
  providedIn: 'root'
})
export class LoginadminService {
  sendAdmin(ausername: string) {
    throw new Error('Method not implemented.');
  }
  private baseUrl = "http://localhost:8081/admin/login";
  constructor(private httpClient: HttpClient) { }

  adminLogin(admin: Admin): Observable<Admin> {
    console.log(admin)
    return this.httpClient.post<Admin>(`${this.baseUrl}`, admin);
  }
}
