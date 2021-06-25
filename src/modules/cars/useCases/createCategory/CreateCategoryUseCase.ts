import { ICreateCategoryDTO } from '../../dtos/ICreateCategoryDTO';
import { Category } from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoriesRepository';

export class CreateCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): Category {
    const categoryNameExists = this.categoryRepository.findByName(name);
    if (categoryNameExists) {
      throw new Error('Category already exists!');
    }
    const category = this.categoryRepository.create({ name, description });

    return category;
  }
}
