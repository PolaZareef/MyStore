import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ChechOrderService } from '../services/check-order.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit {
  name:string='';
  totalprice:number=0;
  constructor(private checkOrder:ChechOrderService,private router:Router) { }

  ngOnInit(): void {
    this.name=this.checkOrder.fullname;
    this.totalprice=this.checkOrder.totalPrice;
    Aos.init();
  }
  goToProducts()
  {
    this.router.navigate(['products']);
  }

}
