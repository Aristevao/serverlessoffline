import { EntityRepository, Repository } from 'typeorm';
import { Tutor } from '../../models/Tutor';

@EntityRepository(Tutor)
export class TutorRepository extends Repository<Tutor> {}
