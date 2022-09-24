import { Review } from "../../domain/Review";

export interface IReviewRepository {
    /**
     * Получение списка отзывов о товаре по его ID
     */
    getProductReviews(id_food: number): Promise<Review[]>;
}