import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from "../services/TutorService";

class TutorUpdateHandler {
    private tutorService: TutorService;
    
    constructor() {
        this.tutorService = new TutorService();
    }

    public execute(event: any): ProxyResult {
        const response = this.tutorService.update(event.pathParameters.id, JSON.parse(event.body));
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorUpdateHandler().execute(event)
    callback(null, response);
};