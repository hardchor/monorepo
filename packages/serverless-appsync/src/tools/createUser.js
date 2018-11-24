import { CognitoIdentityServiceProvider } from 'aws-sdk';
import program from 'commander';
import config from '../config';

program
  .option('-u, --username <username>', 'Username')
  .option('-p, --password <password>', 'Password');

program.parse(process.argv);

const UserPoolId = config.userPoolId;
const ClientId = config.userPoolClientIdPlayground;
const Username = program.username;
const Password = program.password;

const poolData = {
  UserPoolId,
  ClientId,
  region: 'eu-west-1',
};

const signupConfig = {
  UserPoolId,
  Username,
  TemporaryPassword: Password,
  MessageAction: 'SUPPRESS',
};

const authConfig = {
  UserPoolId,
  ClientId,
  AuthFlow: 'ADMIN_NO_SRP_AUTH',
  AuthParameters: {
    USERNAME: Username,
    PASSWORD: Password,
  },
};

const confirmConfig = {
  UserPoolId,
  ClientId,
  // Username,
  ChallengeName: 'NEW_PASSWORD_REQUIRED',
  ChallengeResponses: {
    USERNAME: Username,
    NEW_PASSWORD: Password,
  },
};

(async () => {
  try {
    const userPool = new CognitoIdentityServiceProvider(poolData);

    // create user
    const { User } = await userPool.adminCreateUser(signupConfig).promise();
    console.log('User created', User.Username);

    // login to get session
    const { Session } = await userPool.adminInitiateAuth(authConfig).promise();
    console.log('User logged in');

    // confirm / reset password
    await userPool.adminRespondToAuthChallenge({ ...confirmConfig, Session }).promise();
    console.log('Confirmed user');
  } catch (err) {
    console.error(err);
  }
})();
