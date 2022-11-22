import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductItemDetailComponent } from './product-item-detail/product-item-detail.component';
import { CartComponent } from './cart/cart.component';
import { CheckoutOrderComponent } from './checkout-order/checkout-order.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {path:'',component:ProductListComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'productDetail',component:ProductItemDetailComponent},
  {path:'cart',component:CartComponent},
  {path:'checkorder',component:CheckoutOrderComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
