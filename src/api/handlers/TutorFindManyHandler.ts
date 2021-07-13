import { APIGatewayEvent, Handler, ProxyResult } from 'aws-lambda';
import { DatabaseServerlessHandler } from '../core/DatabaseServerlessHandler';
import { ProxyResultBuilder } from '../core/ProxyResultBuilder';
import { TutorService } from '../services/TutorService';

class TutorFindManyHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private tutorService: TutorService | undefined;

    initializeDependencies(): void {
        this.tutorService = new TutorService(this.connection);
    }

    public async onHandleEvent(): Promise<ProxyResult> {
        const response = await this.tutorService.findMany();
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = await new TutorFindManyHandler().execute(event);
    callback(null, response);
}