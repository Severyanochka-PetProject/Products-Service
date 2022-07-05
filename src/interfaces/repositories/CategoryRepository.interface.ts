import { Category } from '../../domain/Category';

export interface ICategoryRepository {
    /**
     * Получить список категорий
     */
    getCategories(): Promise<Category[]>;

    /**
     * Добавить категорию
     */
    addCategory(category: Category): Promise<Boolean>;

    /**
     * Удалить категорию по id
     * @param id_category
     */
    removeCategory(id_category: number): Promise<Boolean>;
}