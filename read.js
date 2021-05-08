const AWS = require("aws-sdk");
AWS.config.region = "us-east-1"

const dynamodb = new AWS.DynamoDB.DocumentClient();

let response = {};
let params = {};

module.exports.handler = async (event) => {

  try {
    // checking whether the id exists
    if (event.id) {
      params = {
        TableName: process.env.TABLE_NAME,
        Key: {
          id: event.id,
        },
      };
      const dbRes = await dynamodb.get(params).promise();
      response = {
        statusCode: 200,
        body: dbRes,
      };
    } else {
      params = {
        TableName: process.env.TABLE_NAME,
      };
      const dbResAll = await dynamodb.scan(params).promise();
      response = {
        statusCode: 200,
        body: dbResAll
      };
    }
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify(`Some error occured ${error}`),
    };
  }
  return response;
};
