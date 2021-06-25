import { CreateCategoryController } from './CreateCategoryController';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';
import { CategoriesRepository } from './../../repositories/CategoriesRepository';

const categoriesRepository = new CategoriesRepository();
const createCategoryUseCase = new CreateCategoryUseCase(categoriesRepository);

export const createCategoryController = new CreateCategoryController(createCategoryUseCase);
