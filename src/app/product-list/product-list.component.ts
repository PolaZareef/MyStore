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
  products1:Products[]=[];
  products2:Products[]=[];
  selectedCategory:boolean=false;
  Category:string='';
  constructor(private productService:ProductsService) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res=>{
      this.products=res;
    });
  }
  FilterData(){
    this.selectedCategory=true;
    for(let i=0;i<this.products.length;i++)
    {
      if(this.Category==="all")
      {
        this.products1.push(this.products[i]);
      }
      if(this.products[i].category===this.Category)
      {
        this.products1.push(this.products[i]);
      }
    }
    this.products2=this.products1;
    this.products1=[];
    console.log(this.products2);
  }

}
