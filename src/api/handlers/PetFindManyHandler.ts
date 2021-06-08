import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetFindManyHandler {
    private petService: PetService;

    public initializeDependencies(): void {
        this.petService = new PetService();
    }

    public execute(): ProxyResult {
        const response = this.petService.findMany();
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindManyHandler().execute();
    callback(null, response);
}
