import { Router } from 'express';
import CategoryRoute from './category.route';
import ProductRoute from "./product.router";
import BasketRoute from "./basket.route";

const router = Router();

router.use(`/categories`, CategoryRoute);
router.use(`/products`, ProductRoute);
router.use('/baskets', BasketRoute);

export default router;