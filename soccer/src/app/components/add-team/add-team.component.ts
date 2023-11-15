import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TeamService } from 'src/app/services/team.service';

@Component({
  selector: 'app-add-team',
  templateUrl: './add-team.component.html',
  styleUrls: ['./add-team.component.css']
})
export class AddTeamComponent implements OnInit {
  addTeam!:FormGroup;
  team:any={};
  id:any;
  title:string="Add team";


  constructor(private activatedRoute:ActivatedRoute,private router:Router, private teamService:TeamService) { }
  

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get('id')
     if(this.id)
      {this.title="Edit team";
       this.getPlayerById();}

  
      }
      addEditTeam() {

        // here to edit
        if (this.id) {
          this.teamService.editTeam(this.team).subscribe((response)=>{
            this.getPlayerById();
            this.router.navigate(["admin"])
          })
    
        }
        // here to add 
        else {
          this.teamService.addTeam(this.team).subscribe()
        }
    
      }
    
    
      getPlayerById()
      {
        this.teamService.getTeamById(this.id).subscribe((response)=>{
          this.team=response;
        })
      }


}
