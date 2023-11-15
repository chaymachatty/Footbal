import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userURL: string = "http://localhost:8086/api/auth/" ;
  constructor(private http: HttpClient) { }
  login(user:any) {
    return this.http.post<{accessToken:any}>(this.userURL + "login", user);
    }
    register(user:any): Observable<any> {
      return this.http.post(this.userURL + "signup", user);
      }
}
