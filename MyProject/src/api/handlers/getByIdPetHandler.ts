import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler, } from 'aws-lambda'
import { PetService } from '../services/petServices';

'use strict';

export const pets: Handler = async function pets(event, context, callback) {

  const pets = PetService.findOneById()

  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
      'Access-Control-Allow-Origin': '*',       // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    body: JSON.stringify({pets})    
  };

  callback(null, response);
};