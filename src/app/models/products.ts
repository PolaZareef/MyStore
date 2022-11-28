export class Products{
    id:number;
    name:string;
    price:number;
    url:string;
    description:string;
    rating:number;
    amount:number;
    discountPercentage:number;

    constructor(){
        this.id=1;
        this.name='';
        this.price=0;
        this.url='';
        this.description='';
        this.rating=0.0;
        this.amount=1;
        this.discountPercentage=0;
    }
}