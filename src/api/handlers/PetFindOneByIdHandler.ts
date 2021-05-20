import { Handler } from "aws-lambda";
import { PetService } from "../services/PetService";

class PetFindOneByIdHandler {
    private service: PetService;

    constructor() {
        this.service = new PetService();
    }

    public execute(event: any) {
        const pets = this.service.findOneById(event.pathParameters.id);
        const response = {
            statusCode: 200,
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
    const response = new PetFindOneByIdHandler().execute(event);
    callback(null, response);
};
