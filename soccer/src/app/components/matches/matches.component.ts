import { Component, OnInit } from '@angular/core';
import { MatchServiceService } from 'src/app/services/match-service.service';



@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {
  matches:any=[];
  term:string=""
  constructor(private matchesService:MatchServiceService) { }
  
  ngOnInit(): void {
    
  this.matchesService.getAllMatches().subscribe(
    (data)=>{
      this.matches=data
    }
  )
  }
  childToParent(id:any)
  {
    console.log("parent"+id)
  }



  
}
