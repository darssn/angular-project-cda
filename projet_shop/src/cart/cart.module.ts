import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDisplayComponent } from './components/cart-display/cart-display.component';

import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [
    CartDisplayComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule, 
    MatSnackBarModule
  ]
})
export class CartModule { }
