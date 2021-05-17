import { Pet } from '../../models/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class PetService {
    private repository: PetRepository;

    constructor() {
        this.repository = new PetRepository();
    }

    public insert(pet: Pet): any {
        return this.repository.insert(pet);
    }
    
    public findOneById(): Pet {
        return this.repository.findOneById();
    }
    
    public findMany(): Pet[] {
        return this.repository.findMany();
    }
    
    public update(): any {
        return this.repository.update();
    }
    
    public remove(): any {
        return this.repository.remove();
    }
}
