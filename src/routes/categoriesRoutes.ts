import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { createCategoryController } from '../modules/cars/useCases/createCategory';

export const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.get('/', (request, response) => {
  const categories = categoriesRepository.index();
  return response.json({
    error: false,
    message: 'Successfully!',
    code: 2000,
    categories,
  });
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});
