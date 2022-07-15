import { Category } from '../domain/Category';
import CategoryRepository from '../repositories/Category.repository';

class CategoryService {

    async getCategories(req, res) {
        const categories = await CategoryRepository.getCategories();
    
        return res.status(200).json([...categories])
    }

    async addCategory(req, res) {
        const category: Category = req.body;

        if (!Object.keys(category).length) {
            return res.status(400).json({ 
                status: false,
                msg: 'Body empty'
            })
        }
        
        const status = await CategoryRepository.addCategory(category);

        res.status(200).json({ 
            status
        })
    }

    async removeCategory(req, res) {
        const id_category : number = req.body;

        if (!id_category) {
            return res.status(400).json({ 
                status: false,
                msg: 'id_category is empty'
            })
        }

        const status = await CategoryRepository.removeCategory(id_category);

        res.status(200).json({ 
            status
        })
    }
}

export default new CategoryService();