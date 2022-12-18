import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/guards/auth.guard';
import { AddProductComponent } from './components/pages/add-product/add-product.component';
import { CartPageComponent } from './components/pages/cart-page/cart-page.component';
import { CheckoutPageComponent } from './components/pages/checkout-page/checkout-page.component';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { PaymentPageComponent } from './components/pages/payment-page/payment-page.component';
import { ProductPageComponent } from './components/pages/product-page/product-page.component';
import { ProfileEditComponent } from './components/pages/profile-edit/profile-edit.component';
import { ProfileComponent } from './components/pages/profile/profile.component';
import { RegisterPageComponent } from './components/pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'search/:searchTerm',
    component: HomeComponent
  },
  {
    path: 'tag/:tag',
    component: HomeComponent
  },
  {
    path: 'product/:id',
    component: ProductPageComponent
  },
  {
    path: 'add-product',
    component: AddProductComponent
  },
  {
    path: 'cart-page',
    component: CartPageComponent
  },
  {
    path: 'checkout-page',
    component: CheckoutPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'payment-page',
    component: PaymentPageComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'register',
    component: RegisterPageComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'edit-profile',
    component: ProfileEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
