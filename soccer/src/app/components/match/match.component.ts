import { Component, EventEmitter, Input, OnInit,Output } from '@angular/core';

@Component({
  selector: 'app-match',
  templateUrl: './match.component.html',
  styleUrls: ['./match.component.css']
})
export class MatchComponent implements OnInit {
  @Input() matchInput:any;
  @Output()callParent=new EventEmitter <any> ()

  constructor() { }

  ngOnInit(): void {
  }
  deleteMatch(id:any)
  {
    console.log("child" +id)
    this.callParent.emit(id)
  }
  compareTo(a:any,b:any)
  {
    if (a>b) {
      return["win","green"]
    }
    if (a<b) {
      return["loss","red"]
    }
    else{
      return["draw","blue"]
    }
  }

}
