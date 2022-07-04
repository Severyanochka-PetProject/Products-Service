import { Category } from '../domain/Category';

export interface ICategoryRepository {
    /**
     * Получить список категорий
     */
    getCategories(): ;

    /**
     * Добавить категорию
     */
    addCategory(category: Category);

    /**
     * Удалить категорию
     * @param id_category
     */
    removeCategory(id_category: number);
}