import { Category } from "../domain/Category";
import { ICategoryRepository } from "../interfaces/repositories/CategoryRepository.interface";

import DataBase from '../db/connect';
import logger from '../logger/logger';
import { Categories } from "../db/entity/Category";
import { Repository } from "typeorm/repository/Repository";

class CategoryRepository implements ICategoryRepository {
    categoryRepository: Repository<Categories>;

    constructor() {
        this.categoryRepository = DataBase.getRepository(Categories);
    }

    async getCategories(): Promise<Category[]> {
        return await this.categoryRepository.find({
            cache: true
        });
    }

    async addCategory(category: Category): Promise<Boolean> {
        try {
            await this.categoryRepository.save(category);
            return true;
        } catch (err) {
            logger.error(err);
            return false;
        }
    }
    
    async removeCategory(id_category: number) {
        try {
            await this.categoryRepository.delete(id_category);
            return true;
        } catch (err) {
            logger.error(err);
            return false;
        }
    }

}

export default new CategoryRepository();