import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Product } from 'src/app/common/product';
import { ProductService } from 'src/app/services/product.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productsService: ProductService) { }

  ngOnInit(): void {
    this.listProducts();
  }

  listProducts() {
    this.productsService.getProducts().subscribe(
      data => {
        this.products = data
      }
    );
  }


  deleteProductById(id: number) {

    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Estas Seguro?",
      text: "Se eliminara y no sera posible recuperarlo",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, Eliminar",
      cancelButtonText: "No, cancelar",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.productsService.deleteProductById(id).subscribe(() => {this.listProducts()});
        swalWithBootstrapButtons.fire({
          title: "Eliminado",
          text: "El Producto ha sido eliminado.",
          icon: "success"
        });
      } else if (
        result.dismiss === Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelado",
          text: "Accion cancelada por el usuario",
          icon: "error"
        });
      }
    });

  }

}

