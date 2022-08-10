import ProductRepository from '../repositories/Product.repository';

class ProductService {

    async getProducts(req, res) {
        const products = await ProductRepository.getProducts();

        return res.status(200).json([...products])
    }
}

export default new ProductService();