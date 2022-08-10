import { Router } from 'express';
import CategoryRoute from './category.route';
import ProductRoute from "./product.router";

const router = Router();

router.use(`/categories`, CategoryRoute);
router.use(`/products`, ProductRoute);

export default router;