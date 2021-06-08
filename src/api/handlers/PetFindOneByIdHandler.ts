import { APIGatewayEvent, Handler } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { PetService } from "../services/PetService";

class PetFindOneByIdHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: PetService | undefined;

    initializeDependencies() {
        this.service = new PetService(this.connection);
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
