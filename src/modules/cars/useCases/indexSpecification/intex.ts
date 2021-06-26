import { SpecificationsRepository } from '../../repositories/implementations/SpecificationsRepository';
import { IndexSpecificationController } from './IndexSpecificationController';
import { IndexSpecificationUseCase } from './IndexSpecificationUseCase';

const specificationsRepository = SpecificationsRepository.getInstance();
const indexSpecificationUseCase = new IndexSpecificationUseCase(specificationsRepository);

export const indexSpecificationController = new IndexSpecificationController(indexSpecificationUseCase);
