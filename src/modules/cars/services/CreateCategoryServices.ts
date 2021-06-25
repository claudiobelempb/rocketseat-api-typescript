import { ICategoriesRepository } from '../repositories/ICategoriesRepository';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

export class CreateCategoryServices {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  execute({ name, description }: ICreateCategoryDTO): Category {
    const categoryNameExists = this.categoriesRepository.findByName(name);

    if (categoryNameExists) {
      throw new Error('Category already exists!');
    }

    const category = this.categoriesRepository.create({
      name,
      description,
    });

    return category;
  }
}
