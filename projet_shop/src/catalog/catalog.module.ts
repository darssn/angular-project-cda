import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { CatalogRoutingModule } from './catalog-routing.module';
import { DisplayAllComponent } from './components/display-all/display-all.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';

import {MatCardModule} from '@angular/material/card';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import { RatingStarsComponent } from './components/rating-stars/rating-stars.component';

@NgModule({
  declarations: [
    DisplayAllComponent,
    ProductCardComponent,
    AddToCartComponent,
    RatingStarsComponent
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
    Ng2SearchPipeModule
  ],
  exports:[
    DisplayAllComponent
  ]
})
export class CatalogModule { }
