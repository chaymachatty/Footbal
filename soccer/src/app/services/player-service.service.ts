import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class PlayerServiceService {

  playerURL:string="http://localhost:8086/players"
  constructor(private router: Router, private http:HttpClient) { }
  getAllPlayers()
  {
    return this.http.get(this.playerURL)

  }
  getPlayerById(id:any) {
    return this.http.get (`${this.playerURL}/${id}`)
   }
  deletePlayer(id: any) {
    return this.http.delete(`${this.playerURL}/${id}`)

   
  }
  editPlayer( player: any) {
    return this.http.put(this.playerURL,player)
  
  }
  addPlayer(player: any) {

    return this.http.post(this.playerURL,player)
  
  }

  }
 

