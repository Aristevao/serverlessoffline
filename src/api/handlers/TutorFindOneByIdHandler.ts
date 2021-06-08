import { APIGatewayEvent, Handler } from 'aws-lambda';
import { DatabaseServerlessHandler } from '../core/DatabaseServerlessHandler';
import { TutorService } from '../services/TutorService';

class TutorFindOneByIdHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private service: TutorService | undefined;

    initializeDependencies(){
        this.service = new TutorService(this.connection);
    }

    public execute(event: any) {
        const tutor = this.service.findOneById(event.pathParameters.id)
        const response = {
            body: JSON.stringify(tutor),
        };
        return response;
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorFindOneByIdHandler().execute(event);
    callback(null, response);
}