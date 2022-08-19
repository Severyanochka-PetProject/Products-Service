import { Basket } from "../domain/Basket";
import BasketRepository from "../repositories/Basket.repository";
import { IBasketRepository } from "../interfaces/repositories/BasketRepository.interface";

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
}

export default new BasketService();