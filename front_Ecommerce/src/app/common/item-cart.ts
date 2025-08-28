export class ItemCart {

    productId!:number;
    productName!:String;
    quantity!:number;
    price!:number;

    getTotalPriceItem(){
        return this.quantity*this.price;
    }
}
