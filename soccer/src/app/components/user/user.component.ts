import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users:any=[];
  @Input()userInput:any;
  @Output()callParent=new EventEmitter <any> ()

  constructor(private userService:UserService) { }

  ngOnInit(): void {
    this.getAllUsers();
  }
  getAllUsers(){
    this.userService.getAllUsers().subscribe(
      (data)=>{
        console.log("here data from BE",data);
        this.users=data;
        
      }
    )}
  deleteUser(id:any){
    this.userService.deleteUser(id).subscribe(
      (response)=>{
       this.getAllUsers();
      }
     );
  }

}
