import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { INewProduct } from 'src/app/shared/interfaces/INewProduct';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit {
  newProductForm!: FormGroup;
  isSubmitted = false;

  returnUrl = '';
  
  constructor(private formBuilder: FormBuilder, private productService: ProductService, private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
    this.newProductForm = this.formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      tags: ['', Validators.required],
      stars: ['', Validators.required],
      imageUrl: ['', Validators.required],
      origins: ['', Validators.required],
      cookTime: ['', Validators.required],
    })

    this.returnUrl = this.activatedRoute.snapshot.queryParams.returnUrl;
  }

  get fc() {
    return this.newProductForm.controls;
  }

  submit() {
    this.isSubmitted = true;
    if (this.newProductForm.invalid) {
      return;
    } else {
      const fv = this.newProductForm.value;
      const product: INewProduct = {
        name: fv.name,
        price: fv.price,
        tags: fv.tags.split(','),
        stars: fv.stars,
        imageUrl: fv.imageUrl,
        origins: fv.origins.split(','),
        cookTime: fv.cookTime
      };

      this.productService.addProduct(product).subscribe(_ => {
        this.router.navigateByUrl(this.returnUrl);
      })
    }
  }
}
