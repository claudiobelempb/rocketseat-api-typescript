import { Router } from 'express';
import { v4 as uuid } from 'uuid';

const categoriesRoutes = Router();

const categories = [];

categoriesRoutes.post('/', (request, response) => {
  const { name, description } = request.body;
  console.log(name, description);

  const data = {
    id: uuid(),
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
