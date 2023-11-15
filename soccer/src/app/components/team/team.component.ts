import { Component, OnInit ,Input,EventEmitter,Output} from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  @Input()teamInput:any;
  @Output()callParent=new EventEmitter <any> ();
  constructor() { }

  ngOnInit(): void {
  }

}
