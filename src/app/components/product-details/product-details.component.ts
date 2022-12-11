import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  productSubscription: Subscription | undefined;

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  getProduct(product: Product): void {
    this.productSubscription = this.storeService.getProduct(this.product!).subscribe((_product) => this.product = _product);
  }

  constructor(private authService: AuthService, private storeService: StoreService) { }

  ngOnInit(): void {
    this.getProduct(this.product!);
  }

  ngOnDestroy(): void {
    if (this.productSubscription) {
      this.productSubscription.unsubscribe();
    }

  }
}
