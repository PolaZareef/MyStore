import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Users } from '../models/users';
import { RegisterService } from '../services/register.service';
import { HttpClient } from '@angular/common/http';
import { LoginService } from '../services/login.service';

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
  users1:any;

  constructor(private router:Router,private loginSer:LoginService,private registerSer:RegisterService,private http: HttpClient) { }

  ngOnInit(): void {
    this.loginSer.getUsers().subscribe(res=>{
      this.users1=res;
      console.log(this.users1);
    });
  }
  signIn(){
      let user={
        //id:Math.random(),
        firstname:this.firstName,
        lastname:this.lastName,
        email:this.email,
        password:this.password
      }
      //using nodejs backend api
      for(let i=0;i<this.users1.length;i++)
      {
        if(this.email.toLocaleLowerCase()===this.users1[i].email.toLocaleLowerCase())
        {
          alert("this User Already Exist");
          return;
        }
      }
          this.registerSer.postUser(user).subscribe(res=>{
              //console.log(Response);
              this.registerSer.addUser(user);
              this.registerSer.user=user;
              alert("Registration Successful...!");
              this.router.navigate(['login']);
          })
         
      //using firebase
      /*this.http.post('https://mystore-fea05-default-rtdb.firebaseio.com/users.json',user)
      .subscribe(Response=>{
        console.log(Response);
      });*/
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
