import { Basket } from "../../domain/Basket";
import {IProductListToBasket} from "../index.interface";
import { Basket as BasketEntity } from "../../db/entity/Basket";

export interface IBasketRepository {
    /**
     * Получение корзины пользователя
     * @param id_user
     */
    getUserBasket(id_user: number): Promise<Basket[]>;

    /**
     * Добавление товара в корзину
     * @param id_user
     * @param id_food
     * @param count
     */
    addProductToBasket(id_user: number, id_food: number, count: number): Promise<boolean>;

    /**
     * Удаление продукта из корзины
     * @param id_user
     * @param id_food
     */
    removeProductFromBasket(id_user: number, id_food: number): Promise<boolean>;

    /**
     * Обновление продукта в Корзине
     * @param id_user
     * @param id_food
     * @param count
     */
    updateBasketProduct(id_user: number, id_food: number, count: number): Promise<boolean>;

    /**
     * Добавление нескольких продуктов в Корзину
     * @param id_user
     * @param products
     */
    addRangeProductsToBasket(id_user: number, products: IProductListToBasket[]): Promise<boolean>;

    /**
     * Проверка существования продукта в Корзине пользователя
    */
    isExistInBasket(id_user: number, id_food: number): Promise<BasketEntity>;
}
