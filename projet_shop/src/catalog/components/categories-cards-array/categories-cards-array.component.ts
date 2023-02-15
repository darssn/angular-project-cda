import { Component } from '@angular/core';
import { Category } from 'src/models/category';
import { ProductService } from 'src/services/productService/product.service';

@Component({
  selector: 'app-categories-cards-array',
  templateUrl: './categories-cards-array.component.html',
  styleUrls: ['./categories-cards-array.component.css'],
})
export class CategoriesCardsArrayComponent {
  categories!: Category[];

  constructor(public ps: ProductService) {
    this.categories = this.ps.getProductsCategories();
  }
}
