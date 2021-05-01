import { PetRepository } from '../repositories/PetRepository';

export class PetService {
    private repository: PetRepository;

    constructor() {
        this.repository = new PetRepository();
    }

    public insert(): any {
        console.log('Error, method not implemented');
    }
    
    public findOneById(): any {
        return this.repository.findOneById();
    }
    
    public findMany(): any {
        return this.repository.findMany();
    }
    
    public update(): any {
        console.log('Error, method not implemented');
    }
    
    public remove(): any {
        console.log('Error, method not implemented');
    }
}
