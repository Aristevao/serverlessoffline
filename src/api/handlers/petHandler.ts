import { Router } from 'express';
import { PetService } from '../services/petServices';
const PetHandler = Router();

PetHandler.get('/', function (_req, res) {
    const pets = PetService.findMany();
    res.status(200).json({pets});
});

export default PetHandler;
