import { Injectable } from '@angular/core';
import { ItemCart } from '../common/item-cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items:Map<number,ItemCart> =new Map<number,ItemCart>();

  itemsList:ItemCart []=[]

  constructor() { }

  addItemCart(itemCart:ItemCart){
    this.items.set(itemCart.productId,itemCart);
  }

  deleteItemCart(productId:number){
    this.items.delete(productId);
    this.items.forEach(
      (valor,clave)=>{
        console.log("Este es la clave y valor:"+ clave,valor)
      }
    );
  }

  totalCart(){
    let totalCart:number=0;
    this.items.forEach(
      (item,clave)=>{
        totalCart+=item.getTotalPriceItem();
      }
    );
    return totalCart;
  }

  convertToListFromMap(){
    this.itemsList.splice(0,this.itemsList.length);
    this.items.forEach(
      (item,clave)=>{
        this.itemsList.push(item);
      }
    );
    return this.itemsList;
  }

}
