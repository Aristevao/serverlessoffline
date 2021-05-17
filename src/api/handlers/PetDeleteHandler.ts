import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetDeleteHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) {
        this.service.remove(event);
        const response = {
            statusCode: 204,
            headers: {
                "x-custom-header": "My Header Value",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
        };
        return response;
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetDeleteHandler().execute(event.pathParameters.id);
    callback(null, response);
};
