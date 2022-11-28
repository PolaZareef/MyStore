import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartProducts:Products[]=[];
  totalOrdersNumber:number=0;
  constructor() {  }

  CartProducts(product:Products){
    if(product.amount===undefined)
    {
      alert("Please Select amount for "+product.name+" Product!");
      return;
    }
    for(let i=0;i<this.cartProducts.length;i++)
    {
      if(this.cartProducts[i].id===product.id)
      {
        alert("this Item already exist in card...!");
        return;
      }
      else{
        continue;
      }
    }
    this.cartProducts.push(product);
    this.totalOrdersNumber+=1;
    alert("Product Added to Cart...");
  }
}
