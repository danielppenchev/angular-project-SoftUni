import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart = new BehaviorSubject<Cart>({ items: [] });
  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);
    if (itemInCart) {
      itemInCart.quantity++;
    } else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackBar.open('1 item addred to cart!', 'Okay', { duration: 3000 });
  }

  getTotal(items: Array<CartItem>): number {
    return items.map(item => item.price * item.quantity).reduce((previous, current) => previous + current, 0);
  }

  clearCart(): void {
    this.cart.next({ items: [] });
    this._snackBar.open('Cart is empty!', 'Okay', { duration: 3000 })
  }

  deleteFromCart(item: CartItem, update = true): Array<CartItem> {
    const modifiedCart = this.cart.value.items.filter((_item) => _item.id !== item.id);
    if (update) {
      this.cart.next({ items: modifiedCart });
      this._snackBar.open('1 item removed from cart!', 'Okay', { duration: 3000 });
    }
    return modifiedCart;
  }

  reduceQuantity(item: CartItem): void {
    let itemForRemoval: CartItem | undefined;

    let modifiedCart = this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        _item.quantity--;
        if (_item.quantity === 0) {
          itemForRemoval = _item;
        }
      }
      return _item;
    });

    if (itemForRemoval) {
        modifiedCart = this.deleteFromCart(itemForRemoval, false);
    }
    this.cart.next({ items: modifiedCart });
    this._snackBar.open('1 item removed from cart!', 'Okay', { duration: 3000 });

  }
}
