import { APIGatewayEvent, Handler } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { TutorService } from "../services/TutorService";

class TutorRemoveHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: TutorService | undefined;

    initializeDependencies(){
        this.service = new TutorService(this.connection);
    }

    public execute(event: any) {
        this.service.remove(event.pathParameters.id);
        const response = {
            statusCode: 204
        };
        return response;
    }
}

export const handler: Handler = (event, context, callback) =>{
    const response = new TutorRemoveHandler().execute(event);
    callback(null, response);
}