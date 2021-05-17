import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetUpdateHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute() {
        const pet = this.service.update();
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
    const response = new PetUpdateHandler().execute();
    callback(null, response);
};
