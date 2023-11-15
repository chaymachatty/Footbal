import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-service',
  templateUrl: './auth-service.component.html',
  styleUrls: ['./auth-service.component.css']
})
export class AuthServiceComponent implements OnInit {
  userURL: string = "http://localhost:8090/api/auth/" ;
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

}
