import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { Product } from 'src/app/common/product';
import { CategoryService } from 'src/app/services/category.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  product: Product = new Product();
  categories:Category[]=[];
  selectFile!: File;
  parametro!: number;

  constructor(private productService: ProductService,
    private router: Router, private activatedRouter: ActivatedRoute,
    private toastr: ToastrService,private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.getProductById();
    this.getCategories();
  }

  addProduct() {

    this.product.code = '257';
    this.product.userId = '1';

    if (this.product.id == null || this.product.id > 0) {
      const formData = new FormData();
      formData.append('product', JSON.stringify(this.product));
      formData.append('img', this.selectFile);
      this.productService.createProduct(formData).subscribe(
        () => {
          if (this.product.id > 0) {
            this.toastr.success("Producto actualizado", "Producto");
          } else {
            this.toastr.success("Producto registrado", "Producto");
          }

          //alert("Save Successful");
          this.router.navigate(["admin/product"]);
        }
      );
    }
  }

  getProductById() {
    this.activatedRouter.params.subscribe(
      prod => {
        this.parametro = prod['id'];
        if (this.parametro) {
          this.productService.getProductById(this.parametro).subscribe(
            data => {
              this.product.id = data.id;
              this.product.code = data.code;
              this.product.name = data.name;
              this.product.description = data.description;
              this.product.urlImage = data.urlImage;
              this.product.price = data.price;
              this.product.userId = data.userId;
              this.product.categoryId = data.categoryId;
            }
          );
        }
      }
    );
  }

  onFileSelect(event: any) {
    const input = event.target as HTMLInputElement;

    if (input?.files && input.files.length > 0) {
      this.selectFile = input.files[0];
    }
  }

  getCategories(){

    return this.categoryService.getCategoryList().subscribe(
      data=>this.categories=data
    );

  }
}
