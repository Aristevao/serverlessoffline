import { createConnection, Connection } from 'typeorm';
import __MODELS__ from './Models';
import "reflect-metadata";

export class Database {
   
    public connection: Connection | undefined

    public async connect(): Promise<void> {
        this.connection = await createConnection({
            "name": "db", 
            "type": "sqlite" as any,
            "host": "localhost",
            "port": 3306,
            "username": "sqlite",
            "password": "sqlite",
            "database": "mentoring_db",
            "synchronize": true,
            "logging": false,
            "entities": __MODELS__,
            "migrations": [
            "src/migration/*.ts"
            ],
            "subscribers": [
            "src/subscriber/*.ts"
            ]
        });
    }
    public async disconnect(): Promise<void> {
        if (this.connection) {
            await this.connection.close();
        }
    }
}