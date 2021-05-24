import { Tutor } from '../../models/Tutor';
import { TutorRepository } from '../repositories/TutorRepository';

export class TutorService {
    private repository: TutorRepository;

    constructor() {
        this.repository = new TutorRepository();
    }

    public insert(tutor: Tutor): Tutor {
        return this.repository.insert(tutor);
    }
    
    public findOneById(id: number): Tutor {
        return this.repository.findOneById(id);
    }

    public findMany(): Tutor[] {
        return this.repository.findMany();
    }

    public update(id: number, tutor: Tutor): Tutor {
        return this.repository.update(id, tutor);
    }

    public remove(id: number): Tutor[] {
        return this.repository.remove(id);
    }
}