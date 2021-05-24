import "reflect-metadata";
import { createConnection, Connection } from 'typeorm';


createConnection().catch(error => console.log(error));
