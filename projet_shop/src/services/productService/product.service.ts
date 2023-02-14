import { Injectable } from '@angular/core';
import { Product } from 'src/models/product';
import { PRODUCTS } from 'src/mocks/products';
import { Category } from 'src/models/category';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getProducts(): Product[] {
    return PRODUCTS;
  }

  getProductsCategories(): Category[] {
    let categories = PRODUCTS.map((p) => p.category);
    return [...new Set(categories)];
  }

  getProductsByCategory(category: Category): Product[] {
    return PRODUCTS.filter((p) => p.category == category);
  }

  getProductById(id: number): Product | undefined {
    return PRODUCTS.find((p) => p.id == id);
  }
}
