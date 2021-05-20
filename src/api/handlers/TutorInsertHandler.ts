import { Handler } from "aws-lambda";
import { TutorService } from '../services/TutorService';

class TutorInsertHandler {
    private service: TutorService;

    constructor() {
        this.service = new TutorService();
    }

    public execute(event: any) {
        const tutor = this.service.insert(JSON.parse(event.body));        
        const response = {
            statusCode: 201,
            body: JSON.stringify(tutor),
        };
        return response;
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorInsertHandler().execute(event);
    callback(null, response);
}