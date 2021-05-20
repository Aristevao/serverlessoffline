import { Tutor } from '../../models/Tutor';

const tutor_entity_database = [
    new Tutor(1, 'Ana', 'Silva', 21),
    new Tutor(2, 'Beatriz', 'Santos', 22),
    new Tutor(3, 'Carlos', 'Oliveira', 23),
];

export class TutorRepository {
    public insert(tutor: Tutor): Tutor {
        tutor.id = tutor_entity_database.length + 1;
        tutor_entity_database.push(tutor);
        return tutor;
    }

    public findOneById(id: number): Tutor {
        return tutor_entity_database[id];
    }

    public findMany(): Tutor[] {
        return tutor_entity_database;
    }

    public update(id: number, tutor: Tutor): any {
        tutor_entity_database[id] = tutor;
        tutor.id = id;
        return tutor;
    }

    public remove(id: any): any {
        for(var i = 0; i < tutor_entity_database.length; i++){
            if(tutor_entity_database[i] === id) {
                return tutor_entity_database.splice(i, 1);
            }
        }
    }
}