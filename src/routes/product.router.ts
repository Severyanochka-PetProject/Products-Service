import { Router } from 'express';

import ProductService from '../services/Product.service';

const router = Router();

router.get("/", ProductService.getProducts);

// router.post("/add-category", CategoryService.addCategory);

// router.delete("/remove-category", CategoryService.removeCategory);

export default router;