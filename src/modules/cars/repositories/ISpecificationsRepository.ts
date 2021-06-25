import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Category } from '../model/Category';

export interface ISpecificationsRepository {
  index(): Category[];
  create({ name, description }: ICreateSpecificationDTO): Category;
  findByName(name: string): Category;
  findById(id: string): Category;
}
