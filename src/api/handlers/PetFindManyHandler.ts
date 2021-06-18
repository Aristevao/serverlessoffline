import { APIGatewayEvent, Handler, ProxyResult } from "aws-lambda";
import { DatabaseServerlessHandler } from "../core/DatabaseServerlessHandler";
import { ProxyResultBuilder } from "../core/ProxyResultBuilder";
import { PetService } from "../services/PetService";

class PetFindManyHandler extends DatabaseServerlessHandler<APIGatewayEvent> {
    private petService: PetService | undefined;

    initializeDependencies(): void {
        this.petService = new PetService(this.connection);
    }

    public async onHandleEvent(): Promise<ProxyResult> {        
        const response = await this.petService.findMany();
        return new ProxyResultBuilder().status(200).body(response).build();
    }
}

export const handler: Handler = async (event, context, callback) => {
    const response = new PetFindManyHandler().execute(event);
    callback(null, response);
}
