import { Injectable } from '@angular/core';
import { Products } from '../models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailService {
  productDetail:Products[]=[];

  constructor() { }
  ProductsDetail(product:Products){
    this.productDetail=[];
    this.productDetail.push(product);
  }
}
