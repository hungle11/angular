import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ShopComponent } from './component/shop/shop.component';
import { DetailProComponent } from './component/detail-pro/detail-pro.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductsListComponent } from './component/admin/products-list/products-list.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { SignupComponent } from './component/signup/signup.component';
import { AccountListComponent } from './component/admin/account-list/account-list.component';
import { EditAccountComponent } from './component/admin/edit-account/edit-account.component';
import { SignUpclComponent } from './component/sign-upcl/sign-upcl.component';
import { SignInComponent } from './component/sign-in/sign-in.component';
@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ShopComponent,
    DetailProComponent,
    AdminLayoutComponent,
    ProductsListComponent,
    HeaderComponent,
    FooterComponent,
    ClientLayoutComponent,
    EditProductComponent,
    AddProductComponent,
    SignupComponent,
    AccountListComponent,
    EditAccountComponent,
    SignUpclComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
