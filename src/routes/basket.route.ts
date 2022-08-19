import { Router } from 'express';

import BasketService from '../services/Basket.service';

const router = Router();

router.get("/get-user-basket", BasketService.getUserBasket);

router.post("/add-product-basket", BasketService.addProductToBasket);

export default router;