import { Component, OnInit } from '@angular/core';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.css']
})
export class TeamsComponent implements OnInit {
  teams:any=[];
  term:string=""
  constructor(private teamService:TeamService) { }

  ngOnInit(): void {
    this.teamService.getAllTeams().subscribe(
      (data)=>{
        this.teams=data
        console.log(this.teams)
      }
    )
  }
  childToParent(id:any)
  {
    console.log("parent"+id)
  }

}
