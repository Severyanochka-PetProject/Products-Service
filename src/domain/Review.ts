import { Product } from "./Product";

export interface Review {
    id_review: number,
    date: Date,
    text: string,
    stars: number,
    id_user: number,
    id_food: number,
    product: Product
}