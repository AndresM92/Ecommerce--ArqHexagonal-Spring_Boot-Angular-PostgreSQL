import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemCart } from 'src/app/common/item-cart';
import { Product } from 'src/app/common/product';
import { CartService } from 'src/app/services/cart.service';
import { HomeService } from 'src/app/services/home.service';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detail-product',
  templateUrl: './detail-product.component.html',
  styleUrls: ['./detail-product.component.css']
})
export class DetailProductComponent implements OnInit {

  constructor(private homeService: HomeService, private activatedRouter: ActivatedRoute, private router: Router, private cartService: CartService) { }

  product: Product = new Product();
  cart: ItemCart = new ItemCart();
  parametro!: number;

  ngOnInit(): void {

    this.getProductById();

  }

  quantities = [1, 2, 3, 4, 5];
  quantity = 1;

  addToCart(id: number) {

    this.cart.productId = this.product.id;
    this.cart.productName = this.product.name;
    this.cart.quantity = this.quantity;
    this.cart.price = this.product.price;
    this.cart.urlImage = this.product.urlImage;
    this.cartService.addItemCart(this.cart);

    Swal.fire({
      title: "Producto agregado al Carrito",
      icon: "success",
      draggable: true
    });

    console.log(this.cartService.totalCart());

  }

  getProductById() {

    this.activatedRouter.params.subscribe(
      p => {
        this.parametro = p["id"];
        if (this.parametro) {
          this.homeService.getProductById(this.parametro).subscribe(
            data => {
              this.product.id = data.id,
                this.product.name = data.name,
                this.product.code = data.code,
                this.product.description = data.description,
                this.product.price = data.price,
                this.product.urlImage = data.urlImage,
                this.product.image = data.image,
                this.product.categoryId = data.categoryId
            }
          );
        }
      }
    );
  }

}
