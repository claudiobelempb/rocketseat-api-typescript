import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './CreateCategoryUseCase';

export class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const { name, description } = request.body;
    const category = this.createCategoryUseCase.execute({ name, description });

    return response.status(201).json({
      error: false,
      message: 'Successfully created category',
      code: 2001,
      category,
    });
  }
}
