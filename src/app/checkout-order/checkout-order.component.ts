import { Component, OnInit } from '@angular/core';
import { ChechOrderService } from '../services/check-order.service';

@Component({
  selector: 'app-checkout-order',
  templateUrl: './checkout-order.component.html',
  styleUrls: ['./checkout-order.component.css']
})
export class CheckoutOrderComponent implements OnInit {
  name:string='';
  totalprice:number=0;
  constructor(private checkOrder:ChechOrderService) { }

  ngOnInit(): void {
    this.name=this.checkOrder.fullname;
    this.totalprice=this.checkOrder.totalPrice;
  }

}
