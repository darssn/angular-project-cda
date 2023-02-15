import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CatalogRoutingModule } from './catalog-routing.module';
import { DisplayAllComponent } from './components/display-all/display-all.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { CategoriesCardsArrayComponent } from './components/categories-cards-array/categories-cards-array.component';

import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { CategoryDisplayComponent } from './components/category-display/category-display.component';

@NgModule({
  declarations: [
    DisplayAllComponent,
    ProductCardComponent,
    AddToCartComponent,
    RatingStarsComponent,
    ProductDetailsComponent,
    CategoryCardComponent,
    CategoriesCardsArrayComponent,
    CategoryDisplayComponent,
  ],
  imports: [
    CommonModule,
    CatalogRoutingModule,
    MatCardModule,
    MatPaginatorModule,
    MatGridListModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    Ng2SearchPipeModule,
  ],
  exports: [DisplayAllComponent, CategoriesCardsArrayComponent],
})
export class CatalogModule {}
