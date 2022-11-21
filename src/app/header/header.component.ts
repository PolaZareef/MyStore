import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,public LogInService:LoginService) { }

  ngOnInit(): void {
  }

  goToStore(){
      this.router.navigate(['']);
  }
  goToCart(){
      this.router.navigate(['cart']);
  }
  logIn(){
    this.router.navigate(['login']);
  }

}
