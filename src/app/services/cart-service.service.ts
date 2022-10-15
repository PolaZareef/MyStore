import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartProducts:Products[]=[];
  constructor() { }

  CartProducts(product:Products){
    this.cartProducts.push(product);
  }
}
