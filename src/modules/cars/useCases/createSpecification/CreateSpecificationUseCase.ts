import { ICreateSpecificationDTO } from '../../dtos/ICreateSpecificationDTO';
import { Specification } from '../../model/Specification';
import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

export class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {}

  execute({ name, description }: ICreateSpecificationDTO): Specification {
    const specificationNameAlreadyExists = this.specificationsRepository.findByName(name);
    if (specificationNameAlreadyExists) {
      throw new Error('Specification name already exists!');
    }
    const specification = this.specificationsRepository.create({ name, description });
    return specification;
  }
}
