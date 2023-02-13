import { Component } from '@angular/core';
import { PRODUCTS } from 'src/mocks/products';

@Component({
  selector: 'app-display-all',
  templateUrl: './display-all.component.html',
  styleUrls: ['./display-all.component.css']
})
export class DisplayAllComponent {
  
    products = PRODUCTS;
    nbProducts:number = PRODUCTS.length;
    searchProduct!: string;

    constructor() { }
}
