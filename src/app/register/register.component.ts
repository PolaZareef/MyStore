import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { RegisterService } from '../services/register.service';
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

  constructor(private router:Router,private registerSer:RegisterService) { }

  ngOnInit(): void {
  }
  signIn(){
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
  }

}
