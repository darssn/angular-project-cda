import { Product } from "./product";

//Interface of productCart
export interface ProductCart {
    id: number;
    quantity: number;
    product: Product;
}
