import { ICreateCategoryDTO } from '../dtos/ICreateCategoryDTO';
import { Category } from '../model/Category';

export interface ICategoriesRepository {
  index(): Category[];
  create({ name, description }: ICreateCategoryDTO): Category;
  findByName(name: string): Category;
  findById(id: string): Category;
}
