import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetDeleteHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private petService: PetService | undefined;

    initializeDependencies(): void {
        this.petService = new PetService(this.connection);
    }

    public async onHandleEvent(event: APIGatewayEvent): Promise<ProxyResult> {
        this.petService.remove(event.pathParameters.id);
        return new ProxyResultBuilder().status(204).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = await new PetDeleteHandler().execute(event);
    callback(null, response);
};
