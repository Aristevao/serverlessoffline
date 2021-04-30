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

const insert = () => {
    console.log('Error, method not implemented');
};

const findOneById = () => {
    return pet_entity_database.one;
};

const findMany = () => {
    return pet_entity_database;
};

const update = () => {
    console.log('Error, method not implemented');
};

const remove = () => {
    console.log('Error, method not implemented');
};

export const PetRepository = {
    insert,
    findOneById,
    findMany,
    update,
    remove,
};