import { Component, OnInit ,EventEmitter,Output ,Input} from '@angular/core';


@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {
  @Input()playerInput:any;
  @Output()callParent=new EventEmitter <any> ()

  constructor() {}

  ngOnInit(): void {
  }


}
