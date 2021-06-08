import { APIGatewayEvent, Handler } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { PetService } from "../services/PetService";

class PetDeleteHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: PetService | undefined;

    initializeDependencies() {
        this.service = new PetService(this.connection);
    }

    public execute(event: any) {
        this.service.remove(event.pathParameters.id);
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
    const response = new PetDeleteHandler().execute(event);
    callback(null, response);
};
