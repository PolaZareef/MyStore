import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
import { Users } from '../models/users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  users:Users[]=[];
  constructor(private router:Router,private logInService:LoginService,private registerSer:RegisterService) { }

  ngOnInit(): void {
    this.users=this.registerSer.users;
  }
  logIn(){
    for(let i=0;i<this.users.length;i++)
    {
      if(this.email===this.users[i].email && this.password===this.users[i].password)
      {
        this.logInService.isLogin=true;
        this.router.navigate(["products"]);   
        return; 
      }
    }
    alert("User Not Found...!");
  }
  SignUp(){
    this.router.navigate(["register"]);
  }

}
