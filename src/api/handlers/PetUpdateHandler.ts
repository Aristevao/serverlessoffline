import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetUpdateHandler {
    private petService: PetService;

    constructor() {
        this.petService = new PetService();
    }

    public execute(event: any): ProxyResult {
        const response = this.petService.update(event.pathParameters.id, JSON.parse(event.body));
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetUpdateHandler().execute(event);
    callback(null, response);
};
