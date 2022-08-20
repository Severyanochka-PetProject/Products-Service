import { Router } from 'express';

import BasketService from '../services/Basket.service';

const router = Router();

router.get("/get-user-basket", BasketService.getUserBasket);

router.post("/add-product-basket", BasketService.addProductToBasket);

router.delete("/remove-product-basket", BasketService.removeProductFromBasket);

export default router;