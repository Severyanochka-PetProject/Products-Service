import { Product } from "./Product";
import { User } from "./User";

export interface Review {
    id_review: number,
    date: Date,
    text: string,
    stars: number,
    id_user: number,
    id_food: number,
    product: Product,
    user: User
}