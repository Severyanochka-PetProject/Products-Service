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
            cache: true,
            relations: {
                category: true,
                brand: true,
                manufacture: true
            },
        });
    }
    
    async getProductsByCategoryId(id_category: number): Promise<Product[]> {
        try {
            return await this.productRepository.find({
                where: {
                    id_category
                }
            })
        } catch(err) {
            return null
        }
    }

    async getProductById(id_food: number): Promise<Product> {
        try {
            return await this.productRepository.findOne({
                where: {id_food},
                relations: {
                    category: true,
                    brand: true,
                    manufacture: true
                },
            })
        } catch(err) {
            return null
        }
    }

    async addProduct(product: Product): Promise<Boolean> {
        try {
            await this.productRepository.save(product);
            return true;
        } catch(err) {
            return false;
        }
    }

    async removeProduct(id_food: number): Promise<Boolean> {
        try {
            await this.productRepository.delete(id_food);
            return true;
        } catch(err) {
            return false;
        }
        throw new Error('Method not implemented.');
    }
}

export default new ProductRepository();