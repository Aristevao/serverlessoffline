import { Handler, ProxyResult } from "aws-lambda";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from "../services/TutorService";

class TutorRemoveHandler {
    private tutorService: TutorService;

    constructor(){
        this.tutorService = new TutorService();
    }

    public execute(event: any): ProxyResult {
        this.tutorService.remove(event.pathParameters.id);
        return new ProxyResultBuilder().status(204).build();
    }
}

export const handler: Handler = (event, context, callback) =>{
    const response = new TutorRemoveHandler().execute(event);
    callback(null, response);
}