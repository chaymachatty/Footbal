import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MatchServiceService {

  matchURL:string="http://localhost:8086/matches"
  constructor(private http:HttpClient) { }

  getAllMatches() {
    return this.http.get(this.matchURL);
  }

  getMatchById(id:any) { 
    return this.http.get(`${this.matchURL}/${id}`)
    
  }
  deleteMatch(id: any) {
    return this.http.delete( `${this.matchURL}/${id}`);
  }
  editMatch( match: any) {
  return this.http.put(this.matchURL ,match)
  }
  
  addMatch(obj: any) {


    return this.http.post(this.matchURL,obj)
  }



}
