import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  private _cart : Cart = { items: [] };
  itemsQuantity = 0;

  get isLoggedIn () {
    return this.authService.isLoggedIn;
  }

  get user() {
    return this.authService.user;
  }

  @Input()
  get cart(): Cart {
    return this._cart;
  }
  set cart(cart: Cart) {
    this._cart = cart;
    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((previous, current) => previous + current, 0);
  }

  constructor(private authService: AuthService, private router: Router, private cartService: CartService) {}

  ngOnInit(): void {}

  getTotal(items: Array<CartItem>): number {
    return this.cartService.getTotal(items);
   }

   onClearCart(): void {
    this.cartService.clearCart();
   }
}
