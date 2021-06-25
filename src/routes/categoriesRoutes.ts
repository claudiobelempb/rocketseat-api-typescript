import { Router } from 'express';
import { CategoriesRepository } from '../repositories/CategoriesRepository';

const categoriesRoutes = Router();

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
  const { name, description } = request.body;

  const categoryAlreadyExist = categoriesRepository.findByName(name);

  if (categoryAlreadyExist) {
    return response.status(400).json({
      error: true,
      message: 'Category already exists!',
      code: 4000,
    });
  }

  const category = categoriesRepository.create({
    name,
    description,
  });

  return response.status(201).json({
    error: false,
    message: 'Successfully created category!',
    code: 2001,
    category,
  });
});

export { categoriesRoutes };
