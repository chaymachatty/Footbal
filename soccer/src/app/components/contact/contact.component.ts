import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  counter:number=0
  constructor() { }

  ngOnInit(): void {
  }

  plus():void{
    this.counter=this.counter + 1;
  }
  
  moins():void{
    this.counter=this.counter - 1;
  }
}
