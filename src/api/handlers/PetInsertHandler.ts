import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetInsertHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) {
        const pets = this.service.insert(JSON.parse(event.body));
        const response = {
            statusCode: 201,
            headers: {
                "x-custom-header": "My Header Value",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": true,
            },
            body: JSON.stringify({ pets }),
        };
        return response;
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetInsertHandler().execute(event);

    callback(null, response);
};
