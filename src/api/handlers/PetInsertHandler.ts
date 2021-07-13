import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetInsertHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private petService: PetService | undefined;

    initializeDependencies(): void {
        this.petService = new PetService(this.connection);
    }

    public async onHandleEvent(event: APIGatewayEvent): Promise<ProxyResult> {
        const response = await this.petService.insert(JSON.parse(event.body));
        return new ProxyResultBuilder().status(201).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = await new PetInsertHandler().execute(event);
    callback(null, response);
};
