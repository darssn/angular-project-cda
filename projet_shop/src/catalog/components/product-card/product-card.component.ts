import { Component, Input, OnInit, Output } from '@angular/core';
import { Product } from 'src/models/product';
import { ProductCart } from 'src/models/productCart';
import { CartService } from 'src/services/cartService/cart.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent implements OnInit {
  @Input()
  product!: Product;

  @Output()
  productCart: ProductCart | undefined;

  constructor(public cartService: CartService) {}

  ngOnInit(): void {
    this.productCart = this.isInCart(this.product);
    console.log(this.productCart);
  }

  ngOnChanges(): void {
    this.productCart = this.isInCart(this.product);
    console.log(this.productCart);
  }

  isInCart(product: Product): ProductCart | undefined {
    return this.cartService.isInCart(product);
  }
}
