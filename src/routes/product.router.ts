import { Router } from 'express';

import ProductService from '../services/Product.service';

const router = Router();

router.get("/", ProductService.getProducts);

router.post("/add-product", ProductService.addProduct);

router.delete("/remove-product", ProductService.removeProduct);

export default router;