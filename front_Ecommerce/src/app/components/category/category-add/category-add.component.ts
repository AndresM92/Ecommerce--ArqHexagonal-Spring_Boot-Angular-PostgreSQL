import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Category } from 'src/app/common/category';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  categoryForm!: FormGroup;
  category: Category = new Category();
  parametro!: number;

  constructor(private formCategory: FormBuilder, private categoryService: CategoryService, private toastr: ToastrService,
    private router: Router, private activatedRouter: ActivatedRoute) {

    this.categoryForm = this.formCategory.group({
      id: [null],
      name: ['', [Validators.required, Validators.minLength(2)]]
    });

  }

  ngOnInit(): void {
    this.getCategoryById();
  }

  addCategory(): void {
    if (this.categoryForm.valid) {
      this.categoryService.createCategory(this.categoryForm.value).subscribe(
        () => {
          if (this.categoryForm.get('id')?.value > 0) {
            this.toastr.success("Categoria actualizada", "Categoria");
          } else {
            this.toastr.success("Categoria registrada", "Categoria");
          }
          this.router.navigate(["admin/category"]);
        },
        () => {
          alert("Error al crear la categoria")
        }
      );

    }
  }

  getCategoryById() {
    this.activatedRouter.params.subscribe(
      cate => {
        this.parametro = cate['id'];
        if (this.parametro) {
          this.categoryService.getCategoryById(this.parametro).subscribe(
            data => {
              this.categoryForm.patchValue({
                id: data.id,
                name: data.name
              });
            }
          );
        }
      }
    );
  }

}
