import { Category } from "../domain/Category";
import { ICategoryRepository } from "../interfaces/CategoryRepository.interface";

import DataBase from '../db/connect';
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

    addCategory(category: Category) {
        throw new Error("Method not implemented.");
    }
    
    removeCategory(id_category: number) {
        throw new Error("Method not implemented.");
    }

}

export default new CategoryRepository();