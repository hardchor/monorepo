import { DynamoDB } from 'aws-sdk';
import config from '../config';

const dynamoDb = new DynamoDB.DocumentClient();

export async function create(event, context, callback) {
  console.log('##### create', event, context);

  const putData = await dynamoDb
    .put({
      TableName: config.userTable,
      Item: { handle: event.userName },
    })
    .promise();
  console.log('##### put data', putData);

  const data = await dynamoDb
    .get({
      TableName: config.userTable,
      Key: { handle: event.userName },
    })
    .promise();
  console.log('##### get data', data);

  // create entry in users table

  callback(null, event);
}
