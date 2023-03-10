import { Injectable, OnInit } from '@angular/core';
import { Cart } from 'src/models/cart';
import { Product } from 'src/models/product';
import { ProductCart } from 'src/models/productCart';
import { User } from 'src/models/user';
import { UserService } from 'src/services/userService/user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService implements OnInit {
  userConnected: boolean = false;
  user: User | undefined;

  constructor(public us: UserService) {
    this.user = us.getUser();
    if (this.user) {
      this.userConnected = true;
    }
    console.log(this.user);
  }

  ngOnInit(): void {
    this.user = this.us.getUser();
    if (this.user) {
      this.userConnected = true;
    }
  }

  addProductToCart(product: Product) {
    let cart = this.getCart();
    let productInCart = cart.products.find((p) => p.product.id == product.id);
    let newproductCart: ProductCart;
    if (productInCart) {
      productInCart.quantity++;
    } else {
      newproductCart = { id: 1, quantity: 1, product: product };
      cart.products.push(newproductCart);
    }
    this.saveCart(cart);
    console.log(cart);
  }

  removeProductFromCart(product: Product) {
    let cart = this.getCart();
    let productInCart = cart.products.find((p) => p.product.id == product.id);
    if (productInCart) {
      if (productInCart.quantity > 1) {
        productInCart.quantity--;
      } else {
        cart.products = cart.products.filter((p) => p.product.id != product.id);
      }
    }
    this.saveCart(cart);
  }

  isInCart(product: Product): ProductCart | undefined {
    let cart = this.getCart();
    let productInCart = cart.products.find((p) => p.product.id == product.id);
    return productInCart;
  }

  saveCart(cart: Cart) {
    if (this.user) {
      this.user.cart = cart;
    }
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Cart {
    let cart = localStorage.getItem('cart');
    cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return this.user?.cart || { id: 1, products: [] };
    }
  }

  clearCart() {
    let cart = this.getCart();
    cart.products = [];
    this.saveCart(cart);
  }
}
