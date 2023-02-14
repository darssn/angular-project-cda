import { Injectable } from '@angular/core';
import { Cart } from 'src/models/cart';
import { Product } from 'src/models/product';
import { ProductCart } from 'src/models/productCart';
import { User } from 'src/models/user';
import { UserService } from 'src/services/userService/user.service';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  userConnected: boolean = false;
  user: User | undefined;

  constructor(us: UserService) {
    this.user = us.getUser();
    if (this.user) {
      this.userConnected = true;
    }
    console.log(this.user);
  }

  addProductToCart(product: Product) {
    let cart = this.getCart();
    let productInCart = cart.products.find((p) => p.product.id == product.id);
    let newproductCart: ProductCart;
    if (productInCart) {
      newproductCart = productInCart;
    } else {
      newproductCart = { id: 1, quantity: 1, product: product };
    }
    this.saveCart(cart);
    if (this.user) {
      this.user.cart = cart;
    }
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

  saveCart(cart: Cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  getCart(): Cart {
    let cart = localStorage.getItem('cart');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return this.user?.cart || { id: 1, products: [] };
    }
  }
}
