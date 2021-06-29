import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from "../services/TutorService";

class TutorUpdateHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private tutorService: TutorService | undefined;
    
    initializeDependencies(): void {
        this.tutorService = new TutorService(this.connection);
    }

    public async onHandleEvent(event: any): Promise<ProxyResult> {
        const response = this.tutorService.update(event.pathParameters.id, JSON.parse(event.body));
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = await new TutorUpdateHandler().execute(event)
    callback(null, response);
};