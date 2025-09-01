import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ItemCart } from 'src/app/common/item-cart';
import { CartService } from 'src/app/services/cart.service';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/common/user';
import { OrderProduct } from 'src/app/common/order-product';
import { Order } from 'src/app/common/order';
import { OrderState } from 'src/app/common/order-state';
import { OrderService } from 'src/app/services/order.service';
import { PaymentService } from 'src/app/services/payment.service';
import { DataPayment } from 'src/app/common/data-payment';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-summary-order',
  templateUrl: './summary-order.component.html',
  styleUrls: ['./summary-order.component.css']
})
export class SummaryOrderComponent implements OnInit {

  constructor(private sessionStorageService:SessionStorageService, private paymentService:PaymentService,private orderService:OrderService, private cartService: CartService, private toastr: ToastrService,private userService:UserService) { }

  items: ItemCart[] = [];
  totalCart: number = 0;
  user:User=new User;
  orderProducts: OrderProduct[]=[];

  userId:number=0;


  ngOnInit(): void {

    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.userId=this.sessionStorageService.getItem('token').id;
    this.getUserById(this.userId);
    setTimeout(
      ()=>{
        this.sessionStorageService.removeItem('token');
      },600000
    );
  }

  generateOrder(){
    this.items.forEach(
      data=>{
        let ordeP=new OrderProduct(null,data.productId,data.quantity,data.price)
        this.orderProducts.push(ordeP);
      }
    );

    let order= new Order(null,new Date(),this.orderProducts,this.userId,OrderState.CANCELLED);
    this.orderService.createOrder(order).subscribe(
      data=>{
          this.sessionStorageService.setItem('order',data);
      }
    );
    //Redirection to paypal
    let urlPayment;
    let dataPayment=new DataPayment('PAYPAL',this.totalCart.toString(),'USD','COMPRA');
    this.paymentService.getUrlPaypalPayment(dataPayment).subscribe(
      data=>{
        urlPayment=data.url;
        window.location.href=urlPayment;
      }
    );
  }

  deleteItemCart(productId: number, name: String) {
    let nameProduct = name.toString();
    this.cartService.deleteItemCart(productId);
    this.items = this.cartService.convertToListFromMap();
    this.totalCart = this.cartService.totalCart();
    this.toastr.success("Item Eliminado", nameProduct);
  }

  deleteItem(id: number, name: String) {

    let nameProduct = name.toString();
    this.cartService.deleteItemCart(id);
    this.toastr.success("Item Eliminado", nameProduct);

  }

  getUserById(id:number){
    this.userService.getClientById(id).subscribe(
      data=>{
        this.user.firstName=data.firstName;
        this.user.lastName=data.lastName;
        this.user.email=data.email;
        this.user.address=data.address;
      }
    );
  }

}
