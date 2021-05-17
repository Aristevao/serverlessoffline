import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetFindManyHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute() {
        const pets = this.service.findMany();
        console.log();
        
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
    console.log(event)
    const response = new PetFindManyHandler().execute();
    callback(null, response);
};
