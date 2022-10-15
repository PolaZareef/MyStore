import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ChechOrderService {
  fullname:string='';
  totalPrice:number=0;

  constructor() { }

}
