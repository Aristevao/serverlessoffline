import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetDeleteHandler {
    private petService: PetService;

    constructor() {
        this.petService = new PetService();
    }

    public execute(event: any): ProxyResult {
        this.petService.remove(event.pathParameters.id);
        return new ProxyResultBuilder().status(204).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetDeleteHandler().execute(event);
    callback(null, response);
};
