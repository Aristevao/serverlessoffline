import { Handler } from "aws-lambda";
import { Pet } from "../../models/Pet";
import { PetService } from "../services/PetService";

class PetInsertHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) {
        const pets = this.service.insert(event.body);
        const response = {
            statusCode: 201,
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
    const response = new PetInsertHandler().execute(event.body);

    callback(null, response);
};
