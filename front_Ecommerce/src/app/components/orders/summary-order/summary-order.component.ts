import { Component, OnInit } from '@angular/core';
import { ItemCart } from 'src/app/common/item-cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.css']
})
export class SummaryOrderComponent implements OnInit {

  constructor(private cartService:CartService){}

  items:ItemCart[]=[];
  totalCart:number=0;

  ngOnInit(): void {

    this.items=this.cartService.convertToListFromMap();
    this.totalCart=this.cartService.totalCart();
  }

  deleteItemCart(productId:number){
    this.cartService.deleteItemCart(productId);
    this.items=this.cartService.convertToListFromMap();
    this.totalCart=this.cartService.totalCart();
  }

  user = {
    name: 'Juan Pérez',
    email: 'juan@example.com',
    address: 'Cra 10 #20-30, Bogotá',
  };

  /*
  cartProducts = [
    {
      id: 1,
      name: 'Samsung Galaxy A54',
      price: 1200000,
      quantity: 2,
      imageUrl: 'https://via.placeholder.com/100x100?text=Producto'
    },
    {
      id: 2,
      name: 'Portátil Lenovo IdeaPad 3',
      price: 2400000,
      quantity: 1,
      imageUrl: 'https://via.placeholder.com/100x100?text=Producto'
    }
  ];*/

  confirmPurchase() {
    alert('Compra confirmada. Gracias por tu pedido.');
  }

}
