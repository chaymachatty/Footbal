import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  addUsers!:FormGroup;
  user:any={};
  id:any;
  title:string="Add User";
  constructor(private activatedRoute:ActivatedRoute,private router:Router, private userService:UserService) { }

  ngOnInit(): void {
    this.id= this.activatedRoute.snapshot.paramMap.get('id')
     if(this.id)
      {this.title="Edit user";
       this.getUserById();}

  }
  addEditUser() {

    // here to edit
    if (this.id) {
      this.userService.editUser(this.user).subscribe((response)=>{
        this.getUserById();
        this.router.navigate(["admin"])
      })

    }
    // here to add 
    else {
      this.userService.addUser(this.user).subscribe()
    }

  }


  getUserById()
  {
    this.userService.getUserById(this.id).subscribe((response)=>{
      this.user=response;
    })
  }


}
