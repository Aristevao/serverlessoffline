import { Handler, ProxyResult } from 'aws-lambda';
import { ProxyResultBuilder } from '../core/ProxyResultBuilder';
import { TutorService } from '../services/TutorService';
class TutorFindOneByIdHandler {
    private tutorService: TutorService;

    constructor(){
        this.tutorService = new TutorService();
    }

    public execute(event: any): ProxyResult {
        const response = this.tutorService.findOneById(event.pathParameters.id)
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorFindOneByIdHandler().execute(event);
    callback(null, response);
}