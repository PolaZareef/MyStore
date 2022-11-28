import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router:Router,public LogInService:LoginService,public cartService:CartServiceService) { }
  TotalNumberOfOrders:number=0;
  ngOnInit(): void {
  }

  goToStore(){
      this.router.navigate(['products']);
  }
  goToCart(){
      this.router.navigate(['cart']);
  }
  logIn(){
    this.router.navigate(['login']);
  }

  myAcc(){
    this.router.navigate(['profile']);
  }
  signUp(){
    this.router.navigate(['register']);
  }

}
