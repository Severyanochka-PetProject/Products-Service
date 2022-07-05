import { Router } from 'express';
import CategoryRoute from './category.route';

const router = Router();

router.use(`/categories`, CategoryRoute);

export default router;