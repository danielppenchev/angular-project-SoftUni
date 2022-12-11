import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-product-box',
  templateUrl: './product-box.component.html',
  styleUrls: ['./product-box.component.css']
})
export class ProductBoxComponent implements OnInit {
  @Input() fullWidthMode = false;

  @Input() product: Product | undefined;

  @Output() addToCart = new EventEmitter();

  get isLoggedIn() {
    return this.authService.isLoggedIn;
  }

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void { }

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }

  goToDetails(): void {
    this.router.navigate([`/details/${this.product?.id}`]);
  }
}
