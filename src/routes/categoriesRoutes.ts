import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { indexCategoryController } from '../modules/cars/useCases/indexCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';

export const categoriesRoutes = Router();
const upload = multer({
  dest: './tmp',
});

categoriesRoutes.get('/', (request, response) => {
  return indexCategoryController.handle(request, response);
});

categoriesRoutes.post('/', (request, response) => {
  return createCategoryController.handle(request, response);
});

categoriesRoutes.post('/import', upload.single('file'), (request, response) => {
  return importCategoryController.handle(request, response);
});
