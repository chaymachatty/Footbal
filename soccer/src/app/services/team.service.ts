import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  teamURL:string="http://localhost:8086/teams"
  constructor(private http:HttpClient) { }
  getAllTeams() {
    return this.http.get(this.teamURL);
  }

  getTeamById(id:any) { 
    return this.http.get(`${this.teamURL}/${id}`)
    
  }
  deleteMatch(id: any) {
    return this.http.delete( `${this.teamURL}/${id}`);
  }
  editTeam( team: any) {
  return this.http.put(this.teamURL ,team)
  }
  
  addTeam(obj: any) {


    return this.http.post(this.teamURL,obj)
  }
}
