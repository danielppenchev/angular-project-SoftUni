import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';
import { UserService } from 'src/app/services/user.service';
import { Product } from 'src/app/shared/models/Product';
import { User } from 'src/app/shared/models/User';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product!: Product;
  user!: User;

  constructor(userService: UserService ,activatedRoute: ActivatedRoute, private productService: ProductService, private cartService: CartService, private router: Router) {
    activatedRoute.params.subscribe((params) => {
      if (params.id) {
        productService.getProductById(params.id).subscribe((serverProduct) => {
          this.product = serverProduct;
        });
      }
    })
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }

  ngOnInit(): void { }

  addToCart() {
    this.cartService.addToCart(this.product);
    this.router.navigateByUrl('/cart-page');
  }

  deleteItem() {
    this.productService.deleteItem(this.product);
  }

  get isAuth() {
    return this.user.token;
  }

  get isAdmin() {
    return this.user.isAdmin;
  }
}
