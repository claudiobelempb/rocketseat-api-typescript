import { Request, Response } from 'express';
import { IndexSpecificationUseCase } from './IndexSpecificationUseCase';

export class IndexSpecificationController {
  constructor(private indexSpecificationUseCase: IndexSpecificationUseCase) {}
  handle(request: Request, response: Response): Response {
    const specifications = this.indexSpecificationUseCase.execute();
    return response.json({
      error: false,
      message: 'Successfully',
      code: 2000,
      specifications,
    });
  }
}
