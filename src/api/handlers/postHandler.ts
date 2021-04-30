import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda'

export const create: Handler<APIGatewayProxyEvent,APIGatewayProxyResult> = async function create(event, context, callback) {

    return {
      body: JSON.stringify({message: 'something was created'}),
      statusCode: 201,
  }

}