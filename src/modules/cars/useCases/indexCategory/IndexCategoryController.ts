import { Request, Response } from 'express';
import { IndexCategoryUseCase } from './IndexCategoryUseCase';

export class IndexCategoryController {
  constructor(private indexCategoryUseCase: IndexCategoryUseCase) {}

  handle(request: Request, response: Response): Response {
    const categories = this.indexCategoryUseCase.execute();

    return response.json({
      error: false,
      message: 'Successfully!',
      code: 2000,
      categories,
    });
  }
}
