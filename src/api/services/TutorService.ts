import { Connection } from 'typeorm';
import { Tutor } from '../../models/Tutor';
import { TutorRepository } from '../repositories/TutorRepository';

export class TutorService {
    private repository: TutorRepository;

    constructor(connection: Connection) {
        this.repository = connection.getCustomRepository(TutorRepository);
    }

    public async insert(tutor: Tutor): Promise<Tutor> {
        return await this.repository.save(tutor);
    }
    
    public async findOneById(id: number): Promise<Tutor | undefined> {
        return await this.repository.findOne(id);
    }

    public async findMany(): Promise<Tutor[]> {
        return await this.repository.find();
    }

    public async update(id: number, tutor: Tutor): Promise<Tutor> {
        tutor.id = id;
        return await this.repository.save(tutor);
    }

    public async delete(id: any): Promise<void> {
        await this.repository.delete(id);
        return;
    }
}