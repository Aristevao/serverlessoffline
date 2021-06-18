import { Handler, ProxyResult } from 'aws-lambda';
import { ProxyResultBuilder } from '../core/ProxyResultBuilder';
import { TutorService } from '../services/TutorService';

class TutorFindManyHandler {
    private tutorService: TutorService;

    constructor() {
        this.tutorService = new TutorService();
    }

    public execute(): ProxyResult {
        const response = this.tutorService.findMany();
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new TutorFindManyHandler().execute();
    callback(null, response);
}