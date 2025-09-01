export class ItemCart {

    productId!:number;
    productName!:String;
    quantity!:number;
    price!:number;
    urlImage!:String;

    getTotalPriceItem(){
        return this.quantity*this.price;
    }
}
