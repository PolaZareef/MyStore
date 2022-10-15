import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../services/cart-service.service';
import { Products } from '../models/products';
import { ChechOrderService } from '../services/check-order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  shoppingCartProducts:Products[]=[];
  total:number=0;
  fullname:string='';
  quantity:number[]=[0,1,2,3,4,5,6,7,8,9,10];

  constructor(private shoppingcartService:CartServiceService,private checkOrderSer:ChechOrderService, private router:Router) { }

  ngOnInit(): void {
    this.shoppingCartProducts=this.shoppingcartService.cartProducts;
    for(let i=0;i<this.shoppingCartProducts.length;i++)
    {
      this.total+=(this.shoppingCartProducts[i].price*this.shoppingCartProducts[i].amount);
    }
    this.checkOrderSer.totalPrice=this.total;    
  }
  onChange(product:Products){
    console.log(this.total);7
    //this.total=0;
      for(let i=0;i<this.shoppingCartProducts.length;i++)
      {
        this.total+=(this.shoppingCartProducts[i].price*this.shoppingCartProducts[i].amount);
      }
      this.checkOrderSer.totalPrice=this.total;
      console.log(this.total);
    }
  
}
