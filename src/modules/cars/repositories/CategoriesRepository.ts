import { ICategoriesRepository } from './ICategoriesRepository';
import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

export class CategoriesRepository implements ICategoriesRepository {
  private categories: Category[];

  constructor() {
    this.categories = [];
  }

  index(): Category[] {
    const categories = this.categories;
    return categories;
  }

  create({ name, description }: ICreateCategoryDTO): Category {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
    });

    this.categories.push(category);

    return category;
  }

  findByName(name: string): Category {
    const categoryNameExist = this.categories.find(category => category.name === name);
    return categoryNameExist;
  }

  findById(id: string): Category {
    const categoryIdExist = this.categories.find(category => category.id === id);
    return categoryIdExist;
  }
}
