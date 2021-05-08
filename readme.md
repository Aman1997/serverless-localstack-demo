## Serverless-Localstack demo
2 lambdas, namely create and read and 1 dynamodb table has been created as part of the stack for the demo. 1 out of the 2 lambdas is responsible for creating a record in dynamo db table as per the event object while the other is responsible to fetch the record/s as per event object. <br><br>

### To deploy the stack to localstack and run test locally

- Run the [serverless-localstack](https://github.com/localstack/serverless-localstack) in a docker container.
- Inside the root folder of the project, run ```npm install``` to install the dependencies.
- Run ```npm run deploy:localstack``` to deploy the stack in the localstack environment.
- Once the deployment is completed you can test the lambdas locally by running ```npm run local-create``` and ```npm run local-read```.

<br><br>

### Testing
Jest has been used to write integration tests for the lambdas. To run the Jest tests, run the command ```npm run test```. <br>

```create-test-event.json``` and ```read-test-event.json``` to mock the events for lambda. If no Id is mentioned in the event object (``{ "id" : ""}``) the lambda returns all the records.

