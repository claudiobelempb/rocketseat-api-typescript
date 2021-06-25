import { Router } from 'express';
import { CategoriesRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryServices } from '../modules/cars/services/CreateCategoryServices';

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();
const createCategoryServices = new CreateCategoryServices(categoriesRepository);

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
  const { name, description } = request.body;

  const category = createCategoryServices.execute({ name, description });

  return response.status(201).json({
    error: false,
    message: 'Successfully created category!',
    code: 2001,
    category,
  });
});

export { categoriesRoutes };
