import { species } from '../enums/species';

const pet_entity_database = {
    "one": {
        id: 1,
        name: 'Lily',
        age: 10,
        species: species.CAT,
    },
    "two":{
        id: 2,
        name: 'Gato',
        age: 8,
        species: species.DOG,
    },
    "three":{
        id: 3,
        name: 'Suzi',
        age: 20,
        species: species.BIRD,
    }
};

export class PetRepository {
    public insert(): any {
        console.log('Error, method not implemented');
    }
    
    public findOneById(): any {
        return pet_entity_database.one;
    }
    
    public findMany(): any {
        return pet_entity_database;
    }
    
    public update(): any {
        console.log('Error, method not implemented');
    }
    
    public remove(): any {
        console.log('Error, method not implemented');
    }
}
