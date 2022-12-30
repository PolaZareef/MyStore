import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { RegisterService } from '../services/register.service';
import { Users } from '../models/users';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string='';
  password:string='';
  users:Users[]=[];
  users1:any;
  constructor(private router:Router,private logInService:LoginService,private registerSer:RegisterService,private http: HttpClient) { }
  //this functions with firebase api
  ngOnInit(): void {
    //using Firebase
    /*this.http.get('https://mystore-fea05-default-rtdb.firebaseio.com/users.json')
    .subscribe(res=>{
      this.users1=res;
    });*/
    //using nodejs backend api
    //https://users-api-production-e5aa.up.railway.app/users  lw publish api
    
    this.http.get('https://users-api-production-e5aa.up.railway.app/users')
    .subscribe(res=>{
      console.log(res);
      this.users1=res;
      console.log(this.users1);
    });
  }
  logIn(){
    this.users=Object.values(this.users1);
    for(let i=0;i<this.users.length;i++)
    {
      console.log(this.users[i]);
      if(this.email.toLocaleLowerCase()===this.users[i].email.toLocaleLowerCase() && this.password===this.users[i].password)
      {
        this.registerSer.addUser(this.users[i]);
        this.registerSer.user=this.users[i];
        this.logInService.isLogin=true;
        this.router.navigate(["products"]);   
        return; 
      }
    }
    alert("User Not Found...!");
  }
  //this functions without firebase api
  /*ngOnInit(): void {
    this.users=this.registerSer.users;
  }
  logIn(){
    for(let i=0;i<this.users.length;i++)
    {
      if(this.email.toLocaleLowerCase()===this.users[i].email.toLocaleLowerCase() && this.password===this.users[i].password)
      {
        this.registerSer.addUser(this.users[i]);
        this.registerSer.user=this.users[i];
        this.logInService.isLogin=true;
        this.router.navigate(["products"]);   
        return; 
      }
    }
    alert("User Not Found...!");
  }*/
  SignUp(){
    this.router.navigate(["register"]);
  }

}
