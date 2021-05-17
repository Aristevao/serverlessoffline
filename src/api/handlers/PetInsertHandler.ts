import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetInsertHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute() {
        const pet = this.service.insert();
        const response = {
            statusCode: 201,
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
    const response = new PetInsertHandler().execute();
    callback(null, response);
};
