import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from '../services/TutorService';

class TutorInsertHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private tutorService: TutorService | undefined;

    initializeDependencies(): void {
        this.tutorService = new TutorService(this.connection);
    }

    public async onHandleEvent(event: APIGatewayEvent): Promise<ProxyResult> {
        const response = this.tutorService.insert(JSON.parse(event.body));        
        return new ProxyResultBuilder().status(201).body(response).build();
    }
}

export const handler: Handler = (event, context, callback) => {
    const response = new TutorInsertHandler().execute(event);
    callback(null, response);
}