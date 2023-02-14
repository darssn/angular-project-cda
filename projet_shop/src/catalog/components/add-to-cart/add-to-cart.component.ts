import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductCart } from 'src/models/productCart';
import { CartService } from 'src/services/cartService/cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css'],
})
export class AddToCartComponent implements OnChanges, OnInit {
  @Input()
  productCart: ProductCart | undefined;

  @Input()
  product!: Product;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    console.log('on init' + this.productCart);
  }

  ngOnChanges(): void {
    console.log(this.productCart);
  }

  public onAddToCart() {
    this.cartService.addProductToCart(this.product);
  }
}
