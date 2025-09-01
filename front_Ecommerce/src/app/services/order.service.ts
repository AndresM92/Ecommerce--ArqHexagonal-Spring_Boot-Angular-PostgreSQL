import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Order } from '../common/order';
import { Observable } from 'rxjs';
import { HeaderService } from './header.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

    private apiUrl: string = "http://localhost:8085/api/v1/orders";
    private apiUrlUpdate:string = "http://localhost:8085/api/v1/orders/update/state/order";


  constructor(private httpclient:HttpClient,private headerService:HeaderService) { }

  createOrder(order:Order):Observable<Order>{

    return this.httpclient.post<Order>(this.apiUrl,order,{headers:this.headerService.headers});
  }

  updateOrder(formData:any):Observable<any>{
    return this.httpclient.post(`${this.apiUrlUpdate}`,formData,{headers:this.headerService.headers});
  }

  getByUser(userId:number):Observable<Order[]>{
    return this.httpclient.get<Order[]>(`${this.apiUrl}/by-user/${userId}`,{headers:this.headerService.headers});
  }

  getOrderById(orderId:number):Observable<Order>{
    return this.httpclient.get<Order>(`${this.apiUrl}/${orderId}`,{headers:this.headerService.headers});
  }

}
