import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { RegisterService } from '../services/register.service';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  firstName:string='';
  lastName:string='';
  email:string='';
  password:string='';
  users:Users[]=[];

  constructor(private router:Router,private registerSer:RegisterService,private http: HttpClient) { }

  ngOnInit(): void {
  }
  //function with firebase api
  signIn(){
      let user={
        id:Math.random(),
        firstName:this.firstName,
        lastName:this.lastName,
        email:this.email,
        password:this.password
      }
      this.http.post('https://mystore-fea05-default-rtdb.firebaseio.com/users.json',user)
      .subscribe(Response=>{
        console.log(Response);
      });
      this.registerSer.addUser(user);
      this.registerSer.user=user;
      alert("Registration Successful...!");
      this.router.navigate(['login']);
  }
  //function without firebase api
  /*signIn(){
    let user={
      id:Math.random(),
      firstName:this.firstName,
      lastName:this.lastName,
      email:this.email,
      password:this.password
    }
    this.registerSer.addUser(user);
    this.registerSer.user=user;
    alert("Registration Successful...!");
    this.router.navigate(['login']);
}*/


}
