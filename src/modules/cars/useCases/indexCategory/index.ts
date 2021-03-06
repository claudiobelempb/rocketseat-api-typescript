import { CategoriesRepository } from '../../repositories/implementations/CategoriesRepository';
import { IndexCategoryController } from './IndexCategoryController';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

const categoryRepository = CategoriesRepository.getInstance();
const indexCategoryUseCase = new IndexCategoryUseCase(categoryRepository);

export const indexCategoryController = new IndexCategoryController(indexCategoryUseCase);
