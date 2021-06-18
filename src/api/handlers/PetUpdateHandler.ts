import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetUpdateHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private petService: PetService | undefined;

    initializeDependencies(): void {
        this.petService = new PetService(this.connection);
    }

    public async onHandleEvent(event: any): Promise<ProxyResult> {
        const response = this.petService.update(event.pathParameters.id, JSON.parse(event.body));
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetUpdateHandler().execute(event);
    callback(null, response);
};
