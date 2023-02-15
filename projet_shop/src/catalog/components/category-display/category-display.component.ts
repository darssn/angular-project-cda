import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/models/category';
import { Product } from 'src/models/product';
import { CategoryService } from 'src/services/categoryService/category.service';
import { ProductService } from 'src/services/productService/product.service';

@Component({
  selector: 'app-category-display',
  templateUrl: './category-display.component.html',
  styleUrls: ['./category-display.component.css'],
})
export class CategoryDisplayComponent {
  category!: Category;
  products!: Product[];
  searchProduct!: string;
  constructor(
    private route: ActivatedRoute,
    public cs: CategoryService,
    public ps: ProductService
  ) {}

  ngOnInit(): void {
    this.category = this.getcategory();
    this.products = this.getProductByCategory();
  }

  getProductByCategory(): Product[] {
    return this.ps.getProductsByCategory(this.category);
  }

  getcategory(): Category {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    return this.cs.getCategoryById(id);
  }
}
