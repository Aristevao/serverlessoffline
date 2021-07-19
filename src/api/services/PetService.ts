import { Connection } from 'typeorm';
import { Pet } from '../../models/Pet';
import { PetRepository } from '../repositories/PetRepository';

export class PetService {
    private repository: PetRepository;

    constructor(connection: Connection) {
        this.repository = connection.getCustomRepository(PetRepository);
    }

    public async insert(pet: Pet): Promise<Pet> {
        return await this.repository.save(pet);
    }
    
    public async findOneById(id: number): Promise<Pet | undefined> {
        return await this.repository.findOne(id);
    }
    
    public async findMany(): Promise<Pet[]> {
        return await this.repository.find();
    }
    
    public async update(id: number, pet: Pet): Promise<Pet> {
        pet.id = id;
        return await this.repository.save(pet);
    }
    
    public async delete(id: any): Promise<void> {
        await this.repository.delete(id);
        return;
    }
}
