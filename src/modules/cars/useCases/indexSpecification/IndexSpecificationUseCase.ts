import { Specification } from '../../model/Specification';
import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';

export class IndexSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}
  execute(): Specification[] {
    const specifications = this.specificationsRepository.index();
    return specifications;
  }
}
