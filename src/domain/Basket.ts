import { Product } from "./Product";

export interface Basket {
    id_basket: number;
    count: number;
    id_user: number;
    id_food: number;
    product: Product
}