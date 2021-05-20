import { Handler } from 'aws-lambda';
import { TutorService } from '../services/TutorService';

class TutorFindManyHandler {
    private service: TutorService;

    constructor() {
        this.service = new TutorService();
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