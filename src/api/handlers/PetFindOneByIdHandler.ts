import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetFindOneByIdHandler {
    private petService: PetService;

    constructor() {
        this.petService = new PetService();
    }

    public execute(event: any): ProxyResult {
        const response = this.petService.findOneById(event.pathParameters.id);
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindOneByIdHandler().execute(event);
    callback(null, response);
};
