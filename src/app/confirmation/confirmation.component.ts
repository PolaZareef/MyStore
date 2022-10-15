import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { CartInfo } from '../models/cartInfo';
import { ChechOrderService } from '../services/check-order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  address:string='';
  cardNumber:any;
    
  constructor( public checkOrder:ChechOrderService) { }

  ngOnInit(): void {
  }


}
