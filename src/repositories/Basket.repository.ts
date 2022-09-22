import {Repository} from "typeorm";

import DataBase from '../db/connect';

import {Basket} from "../domain/Basket";
import {Basket as BasketEntity} from "../db/entity/Basket";
import {IBasketRepository} from "../interfaces/repositories/BasketRepository.interface";
import {IProductListToBasket} from "../interfaces/index.interface";

class BasketRepository implements IBasketRepository {
    private basketRepository: Repository<BasketEntity>;

    constructor() {
        this.basketRepository = DataBase.getRepository(BasketEntity);
    }

    async addRangeProductsToBasket(id_user: number, products: IProductListToBasket[]): Promise<boolean> {
       try {
           const productEntities = products.map((p) => {
               return {
                   id_user,
                   id_food: p.id_product,
                   count: p.count
               }
           })

           productEntities.map(async p => {
               const existInBasket = await this.isExistInBasket(id_user, p.id_food);

               if (existInBasket) {
                   existInBasket.count += p.count;
                   await this.basketRepository.save(existInBasket);
               } else {
                   await this.basketRepository.save(p);
               }
           })

           return true
       } catch (err) {
           return false
       }
    }

    async updateBasketProduct(id_user: number, id_food: number, count: number): Promise<boolean> {
        try {
            const basketProduct = await this.basketRepository.findOne({
                where: {id_user, id_food}
            })

            basketProduct.count = count;
            this.basketRepository.save(basketProduct);

            return true
        } catch (err) {
            return false
        }
    }

    async getUserBasket(id_user: number): Promise<Basket[]> {
        try {
            return await this.basketRepository.find({
                where: { id_user },
                relations: {
                    product: true
                }
            })
        } catch (err) {
            return null
        }
    }

    async addProductToBasket(id_user: number, id_food: number, count: number): Promise<boolean> {
        try {
            const existInBasket = await this.isExistInBasket(id_user, id_food);

            if (existInBasket) {
                existInBasket.count = count;
                await this.basketRepository.save(existInBasket);
            } else {
                const product = {id_user, id_food, count};
                await this.basketRepository.save(product)
            }

            return true
        } catch (err) {
            return false
        }
    }

    async removeProductFromBasket(id_user: number, id_food: number): Promise<boolean> {
        try {
            await this.basketRepository.delete({
                id_user,
                id_food
            })
            return true
        } catch (err) {
            return false
        }
    }

    async isExistInBasket(id_user: number, id_food: number): Promise<BasketEntity> {
        try {
            return await this.basketRepository.findOne({
                where: {id_user, id_food}
            })
        } catch (err) {
            return null
        }
    }
}

export default new BasketRepository();
