import { Component, Input } from '@angular/core';
import { Category } from 'src/models/category';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.css'],
})
export class CategoryCardComponent {
  @Input()
  category!: Category;
}
