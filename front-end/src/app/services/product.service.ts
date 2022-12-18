import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PRODUCTS_BY_ID_URL, PRODUCTS_BY_SEARCH_URL, PRODUCTS_BY_TAG_URL, PRODUCTS_TAGS_URL, PRODUCTS_URL } from '../shared/constants/urls';
import { INewProduct } from '../shared/interfaces/INewProduct';
import { Product } from '../shared/models/Product';
import { Tag } from '../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) {}

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(PRODUCTS_URL);
  }

  getAllProductsBySearchTerm(searchTerm: string) {
    return this.http.get<Product[]>(PRODUCTS_BY_SEARCH_URL + searchTerm);
  }

  getAllTags(): Observable<Tag[]> {
    return this.http.get<Tag[]>(PRODUCTS_TAGS_URL);
  }

  getAllProductsByTag(tag: string): Observable<Product[]> {
    return tag === 'All' ? this.getAll() : this.http.get<Product[]>(PRODUCTS_BY_TAG_URL + tag);
  }

  getProductById(productId: string): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + productId);
  }

  addProduct(product: INewProduct): Observable<INewProduct> {
    return this.http.post<INewProduct>(PRODUCTS_URL, product);
  }

  deleteItem(product: Product): Observable<Product> {
    return this.http.get<Product>(PRODUCTS_BY_ID_URL + 'delete');
  }
}
