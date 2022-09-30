import { Review } from "../domain/Review";
import ReviewRepository from "../repositories/Review.repository";

class ReviewService {
    async sendReview(req, res) {}

    async getProductReviews(req, res) {
        const { id, page, perPage } =  req.query;

        if (!id) {
            return res.status(400).json({ 
                status: false,
                msg: 'Body empty'
            })
        }

        const reviewsPage : Review[] = await ReviewRepository.getPagingReviews(id, page, perPage)

        res.status(200).json({ 
            reviewsPage,
        })
    }

    async getReviewsStatistic(req, res) {
        const { id } =  req.query;

        const reviews : Review[] = await ReviewRepository.getProductReviews(id);

        return res.status(200).json({
            count: reviews.length,
            reviewsStatistic: {
                0: reviews.filter(r => r.stars === 0).length,
                1: reviews.filter(r => r.stars === 1).length,
                2: reviews.filter(r => r.stars === 2).length,
                3: reviews.filter(r => r.stars === 3).length,
                4: reviews.filter(r => r.stars === 4).length,
                5: reviews.filter(r => r.stars === 5).length,
            }
        })
    }
}

export default new ReviewService();