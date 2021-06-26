import { Router } from 'express';

import { createSpecificationController } from '../modules/cars/useCases/createSpecification';
import { indexSpecificationController } from '../modules/cars/useCases/indexSpecification/intex';

export const specificationsRoutes = Router();

specificationsRoutes.get('/', (request, response) => {
  return indexSpecificationController.handle(request, response);
});

specificationsRoutes.post('/', (request, response) => {
  return createSpecificationController.handle(request, response);
});
