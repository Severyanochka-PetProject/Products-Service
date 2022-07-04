import { Product } from '../domain/Product';
import  {IProductRepository} from '../interfaces/ProductRepository.interface';

export default class ProductRepository implements IProductRepository {
    getProducts() {
        throw new Error('Method not implemented.');
    }
    getProductsByCategory(category: string) {
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