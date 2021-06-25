import { Router } from 'express';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { indexCategoryController } from '../modules/cars/useCases/indexCategory';

export const categoriesRoutes = Router();

categoriesRoutes.get('/', (request, response) => {
  return indexCategoryController.handle(request, response);
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});
