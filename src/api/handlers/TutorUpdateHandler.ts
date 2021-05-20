import { Handler } from "aws-lambda";
import { TutorService } from "../services/TutorService";

class TutorUpdateHandler {
    private service: TutorService;
    
    constructor() {
        this.service = new TutorService();
    }

    public execute(event: any) {
        const tutor = this.service.update(JSON.parse(event.pathParameters.id), JSON.parse(event.body));
        const response = {
            body: JSON.stringify(tutor),
        };
        return response;
    }
}

export const handler: Handler = (event, contex, callback) => {
    const response = new TutorUpdateHandler().execute(event)
    callback(null, response);
};