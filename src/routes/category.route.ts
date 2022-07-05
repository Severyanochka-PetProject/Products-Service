import { Router } from 'express';

import CategoryService from '../services/Category.service';

const router = Router();

router.get("/", CategoryService.getCategories);

router.post("/add-category", CategoryService.addCategory);

router.delete("/remove-category", CategoryService.removeCategory);

export default router;