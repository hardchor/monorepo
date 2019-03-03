import dotenv from 'dotenv';

dotenv.config();

const config = {
  userPoolId: process.env.USER_POOL_ID,
  userPoolClientId: process.env.USER_POOL_CLIENT_ID,
  userPoolClientIdPlayground: process.env.USER_POOL_CLIENT_ID_PLAYGROUND,
  userTable: process.env.DYNAMODB_USER_TABLE,
};

export default config;
