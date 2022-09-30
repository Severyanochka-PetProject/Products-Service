import { Review } from "../../domain/Review";

export interface IReviewRepository {
    /**
     * Получение списка отзывов о товаре по его ID
     */
    getProductReviews(id_food: number): Promise<Review[]>;
    
    /**
     * Получение постарничного списка отзывов
     */
    getPagingReviews(id_food: number, page: number, perPage: number): Promise<Review[]>;
}