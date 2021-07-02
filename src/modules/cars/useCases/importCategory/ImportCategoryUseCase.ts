import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute(file: any): void {}
}
