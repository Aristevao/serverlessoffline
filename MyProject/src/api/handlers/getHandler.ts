import { APIGatewayProxyEvent, APIGatewayProxyResult, Handler, } from 'aws-lambda'

'use strict';

var jsonData = {
  "pair": "BTCBRL",
  "last": 2280.0,
  "high": 2306.0,
  "low": 2205.0,
  "vol": 113.17267938,
  "vol_brl": 255658.20705113,
  "buy": 2263.0,
  "sell": 2279.77
}

export const hello: Handler = async function hello(event, context, callback) {

  console.log("---------------------------------------------EVENT---------------------------------------------");
  console.log(event);
  console.log("---------------------------------------------CONTEXT---------------------------------------------");
  console.log(context);
  console.log("---------------------------------------------CALLBACK---------------------------------------------");
  console.log(callback.toString());
  console.log("---------------------------------------------EVENT.httpMethod---------------------------------------------");
  const body = JSON.stringify(event.httpMethod);
  console.log(body)  

  const response = {
    statusCode: 200,
    headers: {
      'x-custom-header': 'My Header Value',
      
      'Access-Control-Allow-Origin': '*', // Required for CORS support to work
      'Access-Control-Allow-Credentials': true, // Required for cookies, authorization headers with HTTPS
    },
    // body: JSON.stringify({ message: 'Hello World!' }),
    body: JSON.stringify(jsonData),
    // body: JSON.stringify({gato:'gato'}),// showing body with object with no variable
  };

  callback(null, response);
};