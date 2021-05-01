import { PetRepository } from '../repositories/PetRepository';

const insert = () => {
    console.log('Error, method not implemented');
};

const findOneById = () => {
    return PetRepository.findOneById();
};

const findMany = () => {
    return PetRepository.findMany();
};

const update = () => {
    console.log('Error, method not implemented');
};

const remove = () => {
    console.log('Error, method not implemented');
};

export const PetService = {
    insert,
    findOneById,
    findMany,
    update,
    remove,
};
