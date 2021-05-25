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
    
    public findOneById(id: number): Pet {
        return this.repository.findOneById(id);
    }
    
    public findMany(): Pet[] {
        return this.repository.findMany();
    }
    
    public update(id: number, pet: Pet): any {
        return this.repository.update(id, pet);
    }
    
    public remove(id: any): any {
        return this.repository.remove(id);
    }
}
