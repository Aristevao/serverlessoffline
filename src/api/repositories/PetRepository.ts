import { Pet } from '../../models/Pet';
import { species } from '../enums/species';

const pet_entity_database = [
    new Pet(1, 'Lily', 10, species.CAT),
    new Pet(2, 'Joca', 8, species.DOG),
    new Pet(3, 'Suzi', 20, species.BIRD),
];

export class PetRepository {
    public insert(pet: Pet): Pet {
        pet.id = 4;
        pet_entity_database.push(pet);
        return pet;
    }
    
    public findOneById(): Pet {
        return pet_entity_database[0];
    }
    
    public findMany(): Pet[] {
        return pet_entity_database;
    }
    
    public update(): Pet {
        const pet = new Pet(2, 'Joca', 8, species.DOG);
        pet.name = 'Bob';
        pet.age = 9;
        return(pet);
    }
    
    public remove(): any {
        return pet_entity_database.pop();
    }
}
