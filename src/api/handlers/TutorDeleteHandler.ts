import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { TutorService } from "../services/TutorService";

class TutorRemoveHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private tutorService: TutorService | undefined;

    initializeDependencies(): void {
        this.tutorService = new TutorService(this.connection);
    }

    public async onHandleEvent(event: any): Promise<ProxyResult> {
        await this.tutorService.delete(event.pathParameters.id);
        return new ProxyResultBuilder().status(204).build();
    }
}

export const handler: Handler = async (event, context, callback) =>{
    const response = await new TutorRemoveHandler().execute(event);
    callback(null, response);
}