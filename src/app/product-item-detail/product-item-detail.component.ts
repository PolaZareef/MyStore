import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductDetailService } from '../services/product-detail.service'; 
import { CartServiceService } from '../services/cart-service.service';


@Component({
  selector: 'app-product-item-detail',
  templateUrl: './product-item-detail.component.html',
  styleUrls: ['./product-item-detail.component.css']
})
export class ProductItemDetailComponent implements OnInit {
  quantity:number[]=[1,2,3,4,5,6,7,8,9,10];
  product:Products[]=[];
  
  constructor(private productsDetail:ProductDetailService,private cartService:CartServiceService) {
   }

  ngOnInit(): void {
    this.product=this.productsDetail.productDetail;
  }
  
  AddProducttoCart(product:Products){
    this.cartService.CartProducts(product);
    alert("Product Added to Cart...");
  }
}
