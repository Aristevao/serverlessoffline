import { Connection } from "typeorm";
import Database from "../core/Database";


export abstract class DatabaseServerlessHandler<T> {
    
    public connection: Connection;

    abstract initializeDependencies?(event?: T): void

    protected async initializeDatabase(): Promise<void> {
        const database = new Database();
        try {
            await database.connect();
            this.connection = database.connection;
        } catch (e) {
            await database.disconnect();
            throw e;
        }
    }
}