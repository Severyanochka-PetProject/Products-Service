import { Brand } from "./Brand";
import { Category } from "./Category";
import { Manufacture } from "./Manufacture";

export interface Product {
    id_food?: number;
    name: string;
    description: string;
    price: number;
    discount: number;
    url: string;
    id_brand: number;
    id_manufacture: number;
    id_category: number;
    category: Category,
    brand: Brand,
    manufacture: Manufacture
}