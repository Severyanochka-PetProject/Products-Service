import { Food } from '../db/entity/Product';
import { Product } from '../domain/Product';
import ProductRepository from '../repositories/Product.repository';

class ProductService {

    async getProducts(req, res) {
        const { id  } =  req.query;

        let products: Product[] | Product;

        if (!id) {
            products = await ProductRepository.getProducts();
        } else {
            const id_food = id;

            products = await ProductRepository.getProductById(id_food);
        }

        return res.status(200).json(Array.isArray(products) ? [...products] : products)
    }

    async addProduct(req, res) {
        const product : Product = req.body;

        if (!product || !Object.keys(product).length) {
            return res.status(400).json({ 
                status: false,
                msg: 'Body empty'
            })
        }

        const status = await ProductRepository.addProduct(product);
        
        res.status(200).json({ 
            status
        })
    }

    async removeProduct(req, res) {
        const { id_food } = req.body;

        if (!id_food) {
            return res.status(400).json({ 
                status: false,
                msg: 'Body empty'
            })
        }

        const status = await ProductRepository.removeProduct(id_food);

        res.status(200).json({ 
            status
        })
    }
}

export default new ProductService();