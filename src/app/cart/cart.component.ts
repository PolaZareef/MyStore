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
  quantity:number[]=[1,2,3,4,5,6,7,8,9,10];
  productIndex:number=0

  constructor(private shoppingcartService:CartServiceService,private checkOrderSer:ChechOrderService, private router:Router) { }

  ngOnInit(): void {
    this.shoppingCartProducts=this.shoppingcartService.cartProducts;
    this.calculateTotalPrice(); 
  }
  onChange(product:Products){
      this.calculateTotalPrice();
    }
    remove(product:Products){
      for(let i=0;i<this.shoppingCartProducts.length;i++)
      {
        if(this.shoppingCartProducts[i].id===product.id )
        {
          this.shoppingcartService.totalOrdersNumber-=1;
          this.productIndex=this.shoppingCartProducts.findIndex(p=>p.id===this.shoppingCartProducts[i].id);
          alert("the "+this.shoppingCartProducts[i].name+" Item will be Removed from Cart List!");
          this.shoppingCartProducts.splice(this.productIndex,1);
        }
      }
      this.calculateTotalPrice();
    }

    checkorderSuccess(name : string){
      this.checkOrderSer.fullname=name;
      this.router.navigate(["checkorder"]);
    }

    calculateTotalPrice(){
      this.total=0;
      for(let i=0;i<this.shoppingCartProducts.length;i++)
      {
        this.total+=Number(this.shoppingCartProducts[i].price*this.shoppingCartProducts[i].amount);
      }
      this.total=Number(this.total.toFixed(2));
      this.checkOrderSer.totalPrice=this.total;
    }
  
}
