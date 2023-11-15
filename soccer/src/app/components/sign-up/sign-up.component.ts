import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mustMatch } from 'src/app/modules/confirmPwd';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm!: FormGroup;
  isSuccessful:boolean=false;
  isSignUpFailed:boolean=true;
  errorMessage:string="";

  constructor(private formBuilder:FormBuilder, private authService:AuthService) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group(
      {
        firstName:['',[Validators.minLength(3),Validators.required]],
        lastName:[''],
        email:[''],
        password:['',[Validators.email,Validators.required]],
        confirmPassword:[''],
      },
      {
        validator:mustMatch("password","confirmPassword")
      }
    )
  }
  signUp()
  {
      console.log("heere into si",this.signUpForm.value);
      this.signUpForm .value.roles = ["admin","user"];
      this.authService .register(this.signUpForm .value).subscribe(
          (data) => {
          this.isSuccessful = true;
          this.isSignUpFailed = false;
                  },
         (err) => {
        this.isSignUpFailed = true;
       this.errorMessage = err.error.message;
                 }
          );
          }

}
