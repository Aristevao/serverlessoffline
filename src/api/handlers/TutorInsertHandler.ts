import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from '../services/TutorService';

class TutorInsertHandler {
    private tutorService: TutorService;

    constructor() {
        this.tutorService = new TutorService();
    }

    public execute(event: any): ProxyResult {
        const response = this.tutorService.insert(JSON.parse(event.body));        
        return new ProxyResultBuilder().status(201).body(response).build();
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorInsertHandler().execute(event);
    callback(null, response);
}