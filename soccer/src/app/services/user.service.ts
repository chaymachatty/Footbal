import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  userURL:string="http://localhost:8086/users"

  constructor(private http:HttpClient) { }
  getAllUsers() {
    return this.http.get(this.userURL);
  }

  getUserById(id:any) { 
    return this.http.get(`${this.userURL}/${id}`)
    
  }
  deleteUser(id: any) {
    return this.http.delete( `${this.userURL}/${id}`);
  }
  editUser( team: any) {
  return this.http.put(this.userURL ,team)
  }
  
  addUser(obj: any) {


    return this.http.post(this.userURL,obj)
  }
}
