import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CartRoutingModule } from './cart-routing.module';
import { CartDisplayComponent } from './components/cart-display/cart-display.component';

import {MatTableModule} from '@angular/material/table';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { DialogCartComponent } from './components/dialog-cart/dialog-cart.component';
import { MatDialogModule } from '@angular/material/dialog';


@NgModule({
  declarations: [
    CartDisplayComponent,
    DialogCartComponent
  ],
  imports: [
    CommonModule,
    CartRoutingModule,
    MatTableModule, 
    MatSnackBarModule,
    MatDialogModule
  ],
})
export class CartModule { }
