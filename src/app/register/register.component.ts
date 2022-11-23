import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

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

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  signIn(){
      this.router.navigate(['login']);
  }

}
