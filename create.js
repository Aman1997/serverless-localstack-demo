const AWS = require("aws-sdk");
const { uuid } = require("uuidv4");

AWS.config.region = "us-east-1";

const dynamodb = new AWS.DynamoDB.DocumentClient();

let response = {};

module.exports.handler = async (event) => {
  if (!event?.title || !event?.task)
    return { statusCode: 500, body: "Payload values missing" };

  try {
    const params = {
      TableName: process.env.TABLE_NAME,
      Item: {
        id: uuid(),
        title: event.title,
        task: event.task,
      },
    };
    await dynamodb.put(params).promise();
    response = {
      statusCode: 201,
      body: JSON.stringify("Item created"),
    };
  } catch (error) {
    response = {
      statusCode: 500,
      body: JSON.stringify(`Some error occured ${error}`),
    };
  }
  return response;
};
