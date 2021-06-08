import { APIGatewayEvent, Handler } from 'aws-lambda';
import { DatabaseServerlessHandler } from '../core/DatabaseServerlessHandler';
import { TutorService } from '../services/TutorService';

class TutorFindManyHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: TutorService | undefined;

    initializeDependencies() {
        this.service = new TutorService(this.connection);
    }

    public execute() {
        const tutor = this.service.findMany();
        const response = {
            body: JSON.stringify(tutor),
        };
        return response;
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new TutorFindManyHandler().execute();
    callback(null, response);
}