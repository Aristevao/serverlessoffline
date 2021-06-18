import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetInsertHandler {
    private petService: PetService;

    constructor() {
        this.petService = new PetService();
    }

    public execute(event: any): ProxyResult {
        const response = this.petService.insert(JSON.parse(event.body));
        return new ProxyResultBuilder().status(201).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetInsertHandler().execute(event);

    callback(null, response);
};
