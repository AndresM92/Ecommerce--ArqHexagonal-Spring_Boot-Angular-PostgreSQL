import { Component, OnInit } from '@angular/core';
import { OrderState } from 'src/app/common/order-state';
import { OrderService } from 'src/app/services/order.service';
import { SessionStorageService } from 'src/app/services/session-storage.service';

@Component({
  selector: 'app-payment-success',
  templateUrl: './payment-success.component.html',
  styleUrls: ['./payment-success.component.css']
})
export class PaymentSuccessComponent implements OnInit {

  constructor(private orderService:OrderService, private sessionStorageService:SessionStorageService){}

  ngOnInit(): void {
      let order= this.sessionStorageService.getItem('order');
      let formData=new FormData();
      formData.append('id',order.id);
      formData.append('state',OrderState.COMFIRMED.toString());
      this.orderService.updateOrder(formData).subscribe(
        data=> 
          //console.log(data)
            this.sessionStorageService.removeItem('token')
      );
  }

}
