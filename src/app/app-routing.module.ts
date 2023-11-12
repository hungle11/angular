import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './component/home-page/home-page.component';
import { ShopComponent } from './component/shop/shop.component';
import { DetailProComponent } from './component/detail-pro/detail-pro.component';
import { AdminLayoutComponent } from './layout/admin-layout/admin-layout.component';
import { ProductsListComponent } from './component/admin/products-list/products-list.component';
import { ClientLayoutComponent } from './layout/client-layout/client-layout.component';
import { EditProductComponent } from './component/admin/edit-product/edit-product.component';
import { AddProductComponent } from './component/admin/add-product/add-product.component';
import { SignupComponent } from './component/signup/signup.component';
import { AccountListComponent } from './component/admin/account-list/account-list.component';
import { EditAccountComponent } from './component/admin/edit-account/edit-account.component';
import { SignUpclComponent } from './component/sign-upcl/sign-upcl.component';

const routes: Routes = [
  {
    path: '', component: ClientLayoutComponent, children: [
      { path: '', component: HomePageComponent },
      { path: 'shop', component: ShopComponent },
    ]
  },
  { path: 'detail/:id', component: DetailProComponent },
  { path: 'signup', component: SignUpclComponent },
  {
    path: 'admin', component: AdminLayoutComponent, children: [
      { path: 'product', component: ProductsListComponent },
      { path: 'product/add', component: AddProductComponent },
      { path: 'product/:id/edit', component: EditProductComponent },
      { path: 'product/account', component: AccountListComponent },
      { path: 'account/:id/edit', component: EditAccountComponent },
      { path: 'signup', component: SignupComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
