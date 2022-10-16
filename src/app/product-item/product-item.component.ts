import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { ProductDetailService } from '../services/product-detail.service';
import { CartServiceService } from '../services/cart-service.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  quantity:number[]=[1,2,3,4,5,6,7,8,9,10];
  
  @Input()
  productItem:Products;

  constructor(private productService:ProductsService,private productDetailservice:ProductDetailService,private cartService:CartServiceService) { 
    this.productItem={
      id:1,
      name:'',
      price:0,
      url:'',
      description:'',
      amount:1
    }
  }

  ngOnInit(): void {
  }

  productDetail(product:Products){
    this.productDetailservice.ProductsDetail(product);
  }
  AddProducttoCart(product:Products){
    this.cartService.CartProducts(product);
  }
}
