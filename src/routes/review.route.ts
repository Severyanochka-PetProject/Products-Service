import { Router } from 'express';

import reviewService from '../services/review.service';

const router = Router();

router.get("/", reviewService.getProductReviews);
router.get("/reviews-statistic", reviewService.getReviewsStatistic);

export default router;