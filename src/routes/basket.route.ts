import { Router } from 'express';

import BasketService from '../services/Basket.service';

const router = Router();

router.get("/get-user-basket", BasketService.getUserBasket);

router.post("/add-product-basket", BasketService.addProductToBasket);

router.post("/add-range-basket", BasketService.addRangeProductsToBasket);

router.delete("/remove-product-basket", BasketService.removeProductFromBasket);

router.patch("/update-product-basket", BasketService.updateBasketProduct);

export default router;
