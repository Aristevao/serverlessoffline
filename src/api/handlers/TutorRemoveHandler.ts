import { Handler } from "aws-lambda";
import { TutorService } from "../services/TutorService";

class TutorRemoveHandler {
    private service: TutorService;

    constructor(){
        this.service = new TutorService();
    }

    public execute(event: any) {
        this.service.remove(event.pathParameters.id);
        const response = {
            statusCode: 204
        };
        return response;
    }
}

export const handler: Handler = (event, context, callback) =>{
    const response = new TutorRemoveHandler().execute(event);
    callback(null, response);
}