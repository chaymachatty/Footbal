import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { response } from 'express';
import { MatchServiceService } from 'src/app/services/match-service.service';


@Component({
  selector: 'app-add-match',
  templateUrl: './add-match.component.html',
  styleUrls: ['./add-match.component.css']
})
export class AddMatchComponent implements OnInit {
  match: any = {}
  id: any;
  title: string = "";
  addMatchForm!: FormGroup

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private matchService: MatchServiceService) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id')

    if (this.id) {
      this.title = "Edit match"
      this.getMatchById()
    }

    else {
      this.title = "add match"
    }
  }
  getMatchById() {
   this.matchService.getMatchById(this.id).subscribe(
    (response)=>{
      this.match=response
    }
   )      
  }


  addEditMatch() {

    // here to edit
    if (this.id) {
      this.matchService.editMatch( this.match).subscribe(
        (response)=>{
          this.getMatchById()
          this.router.navigate(["admin"])

        }
      )

    }
    // here to add 
    else {
      this.matchService.addMatch(this.match).subscribe(
        (response)=>{
          console.log("response from BE",response);
          this.router.navigate(["admin"])
        }
      );
    }

  }
}
