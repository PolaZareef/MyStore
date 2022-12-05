import { Component, OnInit } from '@angular/core';
import { Products } from '../models/products';
import { ProductsService } from '../services/products.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products:Products[]=[];
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.products=res;
    });
  }

}
