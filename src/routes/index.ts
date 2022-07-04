import { Router } from 'express';
import CategoryRepository from '../repositories/Category.repository';

const router = Router();

router.get("/products", (req, res) => {
    throw new Error('Method not implemented.');
})

router.get("/categories", async (req, res) => {
    const categories = await CategoryRepository.getCategories();
    
    res.status(200).json([...categories])
})

export default router;