import {
    APIGatewayProxyEvent,
    APIGatewayProxyResult,
    Handler,
  } from 'aws-lambda'
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient({ region: 'us-east-1' })

const tableName = process.env.productTableName


export const create = async function create(evt:any, context:any, cb:any) {

    const item = JSON.stringify(evt.body)
    dynamo.put({
      Item: item,
      TableName: tableName
    }
    , (err: any, resp: any) => {
      if (err) {
        cb(err)
      } else {
        cb(null, {
          statusCode: 201,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*'
          },
          body: JSON.stringify(resp)
        })
      }
    })
  
  }

module.exports = {
  create
}