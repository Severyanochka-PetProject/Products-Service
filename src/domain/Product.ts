export interface Product {
    id_food: string;
    name: string;
    description: string | null;
    price: string;
    discount: string | null;
    url: string;
    id_brand: number;
    id_manufacture: number;
    id_category: number;
}