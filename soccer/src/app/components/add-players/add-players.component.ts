import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-add-players',
  templateUrl: './add-players.component.html',
  styleUrls: ['./add-players.component.css']
})
export class AddPlayersComponent implements OnInit {
 
  addPlayers!:FormGroup;
  player:any={};
  id:any;
  title:string="Add player";

  constructor(private activatedRoute:ActivatedRoute,private router:Router, private playerService:PlayerServiceService) { }

  ngOnInit(): void {
     this.id= this.activatedRoute.snapshot.paramMap.get('id')
     if(this.id)
      {this.title="Edit player";
       this.getPlayerById();}

     
  
  }  

  
  addEditPlayer() {

    // here to edit
    if (this.id) {
      this.playerService.editPlayer(this.player).subscribe((response)=>{
        this.getPlayerById();
        this.router.navigate(["admin"])
      })

    }
    // here to add 
    else {
      this.playerService.addPlayer(this.player).subscribe()
    }

  }


  getPlayerById()
  {
    this.playerService.getPlayerById(this.id).subscribe((response)=>{
      this.player=response;
    })
  }

}
