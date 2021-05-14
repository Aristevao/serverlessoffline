import { Pet } from '../../models/Pet';
import { species } from '../enums/species';

const pet_entity_database = [
    new Pet(1, 'Lily', 10, species.CAT),
    new Pet(2, 'Joca', 8, species.DOG),
    new Pet(3, 'Suzi', 20, species.BIRD),
];

export class PetRepository {
    public insert(): any {
        console.log('Error, method not implemented');
    }
    
    public findOneById(): Pet {
        return pet_entity_database[0];
    }
    
    public findMany(): Pet[] {
        return pet_entity_database;
    }
    
    public update(): any {
        console.log('Error, method not implemented');
    }
    
    public remove(): any {
        console.log('Error, method not implemented');
    }
}
