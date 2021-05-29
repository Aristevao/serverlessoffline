import { Handler } from 'aws-lambda';
import { TutorService } from '../services/TutorService';

class TutorFindOneByIdHandler {
    private service: TutorService;

    constructor(){
        this.service = new TutorService();
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