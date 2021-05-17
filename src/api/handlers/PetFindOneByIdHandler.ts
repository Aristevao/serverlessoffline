import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetFindOneByIdHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) {
        const pet = this.service.findOneById(event);
        const response = {
            statusCode: 200,
            headers: {
                "x-custom-header": "My Header Value",
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify({ pet }),
        };
        return response;
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindOneByIdHandler().execute(event.pathParameters.id);
    callback(null, response);
};
