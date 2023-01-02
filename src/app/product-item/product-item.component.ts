import { Component, OnInit, Input } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
import { ProductDetailService } from '../services/product-detail.service';
import { CartServiceService } from '../services/cart-service.service';
import { LoginService } from '../services/login.service';
import * as Aos from 'aos';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  quantity:number[]=[1,2,3,4,5,6,7,8,9,10];
  
  @Input()
  productItem:Products;

  constructor(private productService:ProductsService,private productDetailservice:ProductDetailService,private cartService:CartServiceService,private logInSer:LoginService) { 
    this.productItem={
      id:1,
      name:'',
      price:0,
      category:'',
      url:'',
      description:'',
      rating:0.0,
      amount:1,
      discountPercentage:0,
      inStock:0
    }
  }

  ngOnInit(): void {
    Aos.init();
  }

  productDetail(product:Products){
    this.productDetailservice.ProductsDetail(product);
  }
  AddProducttoCart(product:Products){
    if(this.logInSer.isLogin===false)
    {
      alert("Please LogIn...!");
    }
    else{
      this.cartService.CartProducts(product);
    }
  }
}
