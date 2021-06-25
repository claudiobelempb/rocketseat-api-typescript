import { ICreateSpecificationDTO } from '../dtos/ICreateSpecificationDTO';
import { Specification } from '../model/Specification';
import { ISpecificationsRepository } from './ISpecificationsRepository';

export class SpecificationsRepository implements ISpecificationsRepository {
  private specifications: Specification[];

  constructor() {
    this.specifications = [];
  }

  index(): Specification[] {
    const specifications = this.specifications;
    return specifications;
  }

  create({ name, description }: ICreateSpecificationDTO): Specification {
    const specification = new Specification();
    Object.assign(specification, {
      name,
      description,
      status: true,
      created_at: new Date(),
      updated_at: new Date(),
    });
    this.specifications.push(specification);
    return specification;
  }

  findByName(name: string): Specification {
    const specificationNameExist = this.specifications.find(specification => {
      return specification.name === name;
    });
    return specificationNameExist;
  }

  findById(id: string): Specification {
    const specificationIdExist = this.specifications.find(specification => specification.id === id);
    return specificationIdExist;
  }
}
