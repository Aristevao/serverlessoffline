import { APIGatewayEvent, Handler } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { TutorService } from '../services/TutorService';

class TutorInsertHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: TutorService | undefined;

    initializeDependencies() {
        this.service = new TutorService(this.connection);
    }

    public execute(event: any) {
        const tutors = this.service.insert(JSON.parse(event.body));        
        const response = {
            statusCode: 201,
            body: JSON.stringify(tutors),
        };
        return response;
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorInsertHandler().execute(event);
    callback(null, response);
}