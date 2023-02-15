import { Injectable } from '@angular/core';
import { Category } from 'src/models/category';
import { CATEGORIES } from 'src/mocks/categories';

@Injectable({
  providedIn: 'root',
})
export class CategoryService {
  constructor() {}

  getCategoryById(id: number): Category {
    return CATEGORIES.find((category: Category) => category.id === id)!;
  }
}
