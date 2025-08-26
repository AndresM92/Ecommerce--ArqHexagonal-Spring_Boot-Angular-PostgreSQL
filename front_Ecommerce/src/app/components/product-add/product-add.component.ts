import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent  implements OnInit {

  id:number=0;
  code:string='254';
  name:string='';
  description:string='';
  price:number=0;
  urlImage:string='';
  userId:string='1';
  categoryId:string='2';

  constructor(private productService:ProductService,private router:Router,private activatedRouter:ActivatedRoute){

  }

  ngOnInit(): void {
    this.getProductById();
  }

  if (id=!0) {
    
  }
  addProduct(){

    if (this.id != 0) {
      
    }else{

    }
    const formData= new FormData();
    formData.append('id',this.id.toString());
    formData.append('code',this.code);
    formData.append('name',this.name);
    formData.append('description',this.description);
    formData.append('price',this.price.toString());
    formData.append('urlImage',this.urlImage);
    formData.append('userId',this.userId);
    formData.append('categoryId',this.categoryId);
    console.log(formData);

    this.productService.createProduct(formData).subscribe(
      data=> {
        console.log(data);
        this.router.navigate(["admin/product"]);
      }
    );
  }

  getProductById(){
    this.activatedRouter.params.subscribe(
      prod=>{
        let id=prod['id'];
        if(id){
        this.productService.getProductById(id).subscribe(
          data=> {
            this.id=data.id;
            this.code=data.code;
            this.name=data.name;
            this.description=data.description;
            this.urlImage=data.urlImage;
            this.price=data.price;
            this.userId=data.userId;
            this.categoryId=data.categoryId;
          }
        );
        }
      }
    );
  }

}
