import { Component, OnInit,Output,EventEmitter,Input } from '@angular/core';
import { ChechOrderService } from '../services/check-order.service';

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name:string='';
  address:string='';
  cardNumber:number | string='';
  ExpDate:number| string='';
  Cvv:number|string='';

  @Output() checkOrderSuccess: EventEmitter<string> = new EventEmitter();

    
  constructor( public checkOrder:ChechOrderService) { }

  ngOnInit(): void {
  }
  onSubmit(){
    this.checkOrderSuccess.emit(this.name);
  }

}
