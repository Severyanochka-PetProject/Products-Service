import { Product } from '../../domain/Product';

export interface IProductRepository {
    /**
     * Получение всех товаров
     */
    getProducts(): Promise<Product[]>;

    /**
     * Получение товаров по категории (slag_name)
     * @param id_category 
     */
     getProductsByCategoryId(id_category: number);

    /**
     * Получение товара по id_food
     * @param id_food 
     */
    getProductById(id_food: number);

    /**
     * Добавление товара
     * @param product 
     */
    addProduct(product: Product): Promise<Boolean>;

    /**
     * Удаление товара по id_food
     * @param id_food 
     */
    removeProduct(id_food: number): Promise<Boolean>;
}