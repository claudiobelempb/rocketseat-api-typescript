import { Router } from 'express';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/categories', (request, response) => {
  const { name, description } = request.body;
  console.log(name, description);

  const data = {
    name,
    description,
  };
  categories.push(data);

  return response.status(201).json({
    error: false,
    message: 'Successfully created category!',
    code: 2001,
    data,
  });
});

export { categoriesRoutes };
