import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private router:Router,private logInService:LoginService) { }

  ngOnInit(): void {
  }
  logIn(){
    if(this.email==='' || this.password==='')
    {
      alert("Please Enter Username and Password...!");
    }
    else{
      this.logInService.isLogin=true;
      this.router.navigate(["products"]);
    }
    
  }
  SignUp(){
    this.router.navigate(["register"]);
  }

}
