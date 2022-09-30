import { Repository } from "typeorm";
import DataBase from '../db/connect';
import { Review } from "../db/entity/Review";
import { IReviewRepository } from "../interfaces/repositories/ReviewRepository.interface";

class ReviewRepository implements IReviewRepository{
    productRepository: Repository<Review>;

    constructor () {
        this.productRepository = DataBase.getRepository(Review);
    }

    async getProductReviews(id_food: number) {
        return await this.productRepository.find({
            where: {id_food},
            cache: true,
            relations: {
                product: true
            }
        })
    }

    async getPagingReviews(id_food: number, page: number = 1, perPage: number = 5) {
        const skip = (page * perPage) - perPage;

        return await this.productRepository.find({
            where: { id_food },
            relations: {
                product: true
            },
            take: perPage,
            skip,
            order: {
                date: "DESC"
            }
        })
    }
}

export default new ReviewRepository();