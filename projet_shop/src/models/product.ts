import { Category } from "./category";

//models of product
export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    imageUrl: string;
    note: number;
}
