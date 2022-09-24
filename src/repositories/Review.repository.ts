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
}

export default new ReviewRepository();