import { CategoriesRepository } from '../../repositories/CategoriesRepository';
import { IndexCategoryController } from './IndexCategoryController';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

const categoryRepository = new CategoriesRepository();
const indexCategoryUseCase = new IndexCategoryUseCase(categoryRepository);

export const indexCategoryController = new IndexCategoryController(indexCategoryUseCase);
