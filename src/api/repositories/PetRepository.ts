import { Repository } from 'typeorm';
import { Pet } from '../../models/Pet';

export class PetRepository extends Repository<Pet> {}
