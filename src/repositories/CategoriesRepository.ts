import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

class CategoriesRepository {
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
    const categoryName = this.categories.find(category => category.name === name);
    return categoryName;
  }
}

export { CategoriesRepository };
