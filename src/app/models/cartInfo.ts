export class CartInfo{
    name:string;
    address:string;
    cardNumber:number;
    totalPrice:number;

    constructor(){
        this.name='';
        this.address='';
        this.cardNumber=0;
        this.totalPrice=0;
    }
}