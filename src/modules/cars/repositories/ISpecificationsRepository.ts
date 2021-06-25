import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Category } from '../model/Category';

interface ISpecificationsRepository {
  index(): Category[];
  create({ name, description }: ICreateSpecificationDTO): Category;
  findByName(name: string): Category;
  findById(id: string): Category;
}
export { ISpecificationsRepository };
