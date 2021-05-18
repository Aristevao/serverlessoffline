import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetFindOneByIdHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) { // receiving event object (from line 27)
        const pets = this.service.findOneById(event.pathParameters.id); // getting event properties
        const response = {
            statusCode: 200,
            headers: {
                "x-custom-header": "My Header Value",
                "Access-Control-Allow-Origin": "*", // Required for CORS support to work
                "Access-Control-Allow-Credentials": true, // Required for cookies, authorization headers with HTTPS
            },
            body: JSON.stringify({ pets }),
        };
        return response;
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindOneByIdHandler().execute(event); // event object as parameter, with all its properties
    callback(null, response);
};
