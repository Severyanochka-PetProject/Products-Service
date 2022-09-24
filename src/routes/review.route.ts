import { Router } from 'express';

import reviewService from '../services/review.service';

const router = Router();

router.get("/", reviewService.getProductReviews);


export default router;