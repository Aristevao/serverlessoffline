import { ProxyResult } from "aws-lambda";
import { Connection } from "typeorm";
import { Database } from "../core/Database";


export abstract class DatabaseServerlessHandler<T> {

    protected connection: Connection;

    protected abstract initializeDependencies(event?: T): void;

    protected abstract onHandleEvent(event?: T): Promise<ProxyResult>;

    public async execute(event: T): Promise<ProxyResult> {
        this.initializeDatabase();
        this.initializeDependencies(event);
        const result = await this.onHandleEvent(event);
        return result;
    }

    private async initializeDatabase(): Promise<void> {
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