import DataBase from '../db/connect';
import { Repository } from 'typeorm';
import  {IProductRepository} from '../interfaces/repositories/ProductRepository.interface';
import { Food } from '../db/entity/Product';
import { Product } from '../domain/Product';

class ProductRepository implements IProductRepository {
    productRepository: Repository<Food>;

    constructor () {
        this.productRepository = DataBase.getRepository(Food);
    }

    async getProducts(): Promise<Food[]> {
        return await this.productRepository.find({
            cache: true
        });
    }
    
    getProductsByCategory(slag_name: string) {
        throw new Error('Method not implemented.');
    }
    getProductsById(id_product: number) {
        throw new Error('Method not implemented.');
    }
    addProduct(product: Product) {
        throw new Error('Method not implemented.');
    }
    removeProduct(id_product: number) {
        throw new Error('Method not implemented.');
    }
}

export default new ProductRepository();