import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatchServiceService } from 'src/app/services/match-service.service';
import { PlayerServiceService } from 'src/app/services/player-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  matches:any=[]
  players:any=[]
 

  constructor(private router:Router,private matchesService:MatchServiceService,private playerService:PlayerServiceService) { }

  ngOnInit(): void {
    this.getAllMatches();
    this.getAllPlayers();
    
  }
  getAllPlayers()
  {
      this.playerService.getAllPlayers().subscribe(
        (data)=>{
           console.log("data players ",data);
           this.players=data;

           
        }
      )
  }

  getAllMatches(){
      this.matchesService.getAllMatches().subscribe(
        (data)=>{
          console.log("here data from BE",data);
          this.matches=data;
          
        }
      );
    console.log("rrrrrrrrrrrrrrrrrrrr",this.matches);
    

  }
  deleteMatch(id:any)
  {
   this.matchesService.deleteMatch(id).subscribe(
    (response)=>{
     this.getAllMatches();
    }
   );
  }
  deletePlayer(id:any)
  {
    this.playerService.deletePlayer(id).subscribe(
      (response)=>{
     this.getAllPlayers()
      }
    )
   

  }

 
  navigateTo(id:any)
  {
    this.router.navigate(['addmatch/'+id])
    
  }

 
  navigatePlayer(id:any)
  {
    this.router.navigate(['addplayers/'+id])
  }


}
