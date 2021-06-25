import { Router } from 'express';
import { SpecificationsRepository } from '../modules/cars/repositories/SpecificationsRepository';
import { CreateSpecificationServices } from '../modules/cars/services/CreateSpecificationServices';

const specificationsRoutes = Router();
const specificationsRepository = new SpecificationsRepository();
const createSpecificationServices = new CreateSpecificationServices(specificationsRepository);

specificationsRoutes.get('/', (request, response) => {
  const specifications = specificationsRepository.index();
  return response.json({
    error: false,
    message: 'Successfully',
    code: 2000,
    specifications,
  });
});

specificationsRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  const specification = createSpecificationServices.execute({ name, description });
  return response.status(201).json({
    error: false,
    message: 'Successfully created specification',
    code: 2001,
    specification,
  });
});

export { specificationsRoutes };
