import {
  APIGatewayProxyEvent,
  APIGatewayProxyResult,
  Handler,
} from 'aws-lambda'
const { stringify } = JSON

export const replace: Handler<
  APIGatewayProxyEvent,
  APIGatewayProxyResult
> = async function replace(event, context, callback) {

    return {
      body: stringify({ message: 'something was replaced' }),
      statusCode: 200,
  }

}