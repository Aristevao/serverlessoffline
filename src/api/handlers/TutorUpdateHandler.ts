import { APIGatewayEvent, Handler } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { TutorService } from "../services/TutorService";

class TutorUpdateHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: TutorService | undefined;
    
    initializeDependencies() {
        this.service = new TutorService(this.connection);
    }

    public execute(event: any) {
        const tutor = this.service.update(event.pathParameters.id, JSON.parse(event.body));
        const response = {
            body: JSON.stringify(tutor),
        };
        return response;
    }
}

export const handler: Handler = (event, contex, callback) => {
    const response = new TutorUpdateHandler().execute(event)
    callback(null, response);
};