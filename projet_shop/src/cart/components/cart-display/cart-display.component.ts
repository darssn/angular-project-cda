import { Component, OnInit, OnChanges } from '@angular/core';

import { MatSnackBar } from '@angular/material/snack-bar';

import { CartService } from 'src/services/cartService/cart.service';
import { Cart } from 'src/models/cart';
import { ProductCart } from 'src/models/productCart';

@Component({
  selector: 'app-cart-display',
  templateUrl: './cart-display.component.html',
  styleUrls: ['./cart-display.component.css'],
})
export class CartDisplayComponent implements OnInit {
  cart!: Cart;
  displayedColumns: string[] = ['id', 'name', 'price', 'quantity', 'total'];
  dataSource!: ProductCart[];
  totalCost = 0;
  message = 'Commande envoyée !';
  action = 'OK';

  constructor(private _snackBar: MatSnackBar, public cartService: CartService) {
    this.cart = cartService.getCart();
    this.dataSource = this.cart.products;
    console.log(this.cart);
  }

  ngOnInit(): void {
    this.totalCost = this.getTotalCost();
    console.log(this.totalCost);
  }

  getTotalCost() {
    return this.dataSource
      .map((t) => t.product.price * t.quantity)
      .reduce((acc, value) => acc + value, 0);
  }

  openSnackBar(message: string, action: string) {
    this.cartService.clearCart();
    this.cart = this.cartService.getCart();
    this.dataSource = this.cart.products;
    this.totalCost = this.getTotalCost();
    this._snackBar.open(message, action);
  }
}
