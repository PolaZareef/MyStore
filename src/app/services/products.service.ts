import { Injectable } from '@angular/core';
import { Products } from '../models/products';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products:Products[]=[];
  private _jsonURL = './assets/data.json';

  constructor(private http:HttpClient) { 
  }
  getProducts():Observable<Products[]>{
    return this.http.get<Products[]>(this._jsonURL);
  }
}
