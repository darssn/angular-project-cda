import { Cart } from "./cart";

export interface User {
    id: number;
    mail: string;
    pwd: string;
    cart: Cart;
}




