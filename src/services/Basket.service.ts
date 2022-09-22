import BasketRepository from "../repositories/Basket.repository";
import { IProductListToBasket } from "../interfaces/index.interface";

// TODO: Получение id_user из acess_token

class BasketService {
    async getUserBasket(req, res) {
        const { id_user } = req.query;

        if (!id_user || !id_user.length) {
            return res.status(400).json({
                status: false,
                msg: 'Body empty'
            })
        }

        const basket = await BasketRepository.getUserBasket(id_user);

        return res.status(200).json({
            status: true,
            basket,
            length: basket?.length || 0
        })
    }

    async addProductToBasket(req, res) {
        const {id_user, id_food, count} = req.body;

        if (!id_user || !id_food || !count) {
            return res.status(400).json({
                status: false,
                msg: 'Bad body'
            })
        }

        const status = await BasketRepository.addProductToBasket(id_user, id_food, count);

        return res.status(200).json({
            status
        })
    }

    async addRangeProductsToBasket(req, res) {
        const {id_user, products}: {id_user: number, products: IProductListToBasket[]} = req.body;

        if (!id_user || !products.length) {
            return res.status(400).json({
                status: false,
                msg: 'Bad body'
            })
        }

        const status = await BasketRepository.addRangeProductsToBasket(id_user, products);

        return res.status(200).json({
            status
        })
    }

    async removeProductFromBasket(req, res) {
        const {id_user, id_food} = req.body;

        if (!id_user || !id_food) {
            return res.status(400).json({
                status: false,
                msg: 'Bad body'
            })
        }

        const status = await BasketRepository.removeProductFromBasket(id_user, id_food);

        return res.status(200).json({
            status
        })
    }

    async updateBasketProduct(req, res) {
        const {id_user, id_food, count} = req.body;

        if (!id_user || !id_food || !count) {
            return res.status(400).json({
                status: false,
                msg: 'Bad body'
            })
        }

        const status = await BasketRepository.updateBasketProduct(id_user, id_food, count);

        return res.status(200).json({
            status
        })
    }
}

export default new BasketService();
