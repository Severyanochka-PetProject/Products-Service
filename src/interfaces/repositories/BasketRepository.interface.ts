import { Basket } from "../../domain/Basket";

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
}