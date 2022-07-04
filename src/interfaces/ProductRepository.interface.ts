import { Product } from '../domain/Product';

export interface IProductRepository {
    /**
     * Получение всех товаров
     */
    getProducts();

    /**
     * Получение товаров по категории
     * @param category 
     */
    getProductsByCategory(category: string);

    /**
     * Получение товара по id_products
     * @param id_product 
     */
    getProductsById(id_product: number);

    /**
     * Добавление товара
     * @param product 
     */
    addProduct(product: Product);

    /**
     * Удаление товара по id_product
     * @param id_product 
     */
    removeProduct(id_product: number);
}