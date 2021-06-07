import { Handler, ProxyResult } from "aws-lambda";
import { Database } from "../core/Database";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetFindManyHandler {
    private petService: PetService;

    public async initializeDependencies(): Promise<void> {
        const database = new Database();
        try {
            await database.connect();
        } catch (e) {
            await database.disconnect();
            throw e;
        }
        this.petService = new PetService(database.connection);
    }

    public execute(): ProxyResult {
        const response = this.petService.findMany();
        return new ProxyResultBuilder().status(200).body(response).build()
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindManyHandler().execute();
    callback(null, response);
}
