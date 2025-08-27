import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListComponent } from './components/product-list/product-list.component';
import { HeaderAdminComponent } from './components/header-admin/header-admin.component';
import { Routes,RouterModule } from '@angular/router';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';

const routes:Routes=[
  {path:'',component:HomeComponent},
  {path:'admin/product',component:ProductListComponent},
  {path:'admin/product/add_product',component:ProductAddComponent},
  {path:'admin/product/update/:id',component:ProductAddComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductListComponent,
    HeaderAdminComponent,
    ProductAddComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ToastrModule.forRoot(),
    BrowserAnimationsModule, 
    RouterModule.forRoot(routes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
