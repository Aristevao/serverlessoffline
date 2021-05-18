import { Pet } from '../../models/Pet';
import { species } from '../enums/species';

const pet_entity_database = [
    new Pet(1, 'Lily', 10, species.CAT),
    new Pet(2, 'Joca', 8, species.DOG),
    new Pet(3, 'Suzi', 20, species.BIRD),
];

export class PetRepository {
    public insert(pet: Pet): Pet {
        pet.id = pet_entity_database.length + 1;        
        pet_entity_database.push(pet);
        return pet;
    }
    
    public findOneById(id: number): Pet {
        return pet_entity_database[id];
    }
    
    public findMany(): Pet[] {
        return pet_entity_database;
    }
    
    public update(id: number, pet: Pet): any {
        pet_entity_database[id] = pet;
        pet.id = id
        return pet;
    }
    
    public remove(id: any): any {
        for( var i = 0; i < pet_entity_database.length; i++){ 
            if ( pet_entity_database[i] === id) { 
                return pet_entity_database.splice(i, 1); 
            }
        }
    }
}
