import { Component, OnInit } from '@angular/core';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players:any=[];
  term:string=""
  constructor(private playerService:PlayerServiceService) { }

  ngOnInit(): void {
    this.playerService.getAllPlayers().subscribe(
      (data)=>{
        this.players=data
        console.log(this.players)
      }
    )
  }
 
  
  childToParent(id:any)
  {
    console.log("parent"+id)
  }


}
