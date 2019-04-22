import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost';
import fetch from 'isomorphic-unfetch';
import AWSAppSyncClient from 'aws-appsync';
import { AUTH_TYPE } from 'aws-appsync/lib/link/auth-link';
import Amplify, { Auth } from 'aws-amplify';
import config from '../config';

let apolloClient = null;

// Polyfill fetch() on the server (used by apollo-client)
if (!process.browser) {
  global.fetch = fetch;
}

Amplify.configure({
  aws_appsync_graphqlEndpoint: config.appSyncUrl,
  aws_appsync_region: config.awsRegion,
  aws_appsync_authenticationType: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
  Auth: {
    userPoolId: config.userPoolId,
    userPoolWebClientId: config.userPoolWebClientId,
  },
});

function create(initialState) {
  const client = new AWSAppSyncClient(
    {
      url: config.appSyncUrl,
      region: config.awsRegion,
      auth: {
        // Amazon Cognito user pools using AWS Amplify
        type: AUTH_TYPE.AMAZON_COGNITO_USER_POOLS,
        jwtToken: async () => (await Auth.currentSession()).getIdToken().getJwtToken(),
      },
      disableOffline: true,
    },
    {
      connectToDevTools: process.browser,
      cache: new InMemoryCache().restore(initialState || {}),
      ssrMode: !process.browser, // Disables forceFetch on the server (so queries are only run once)
    },
  );

  return client;
}

export default function initApollo(initialState) {
  // Make sure to create a new client for every server-side request so that data
  // isn't shared between connections (which would be bad)
  if (!process.browser) {
    return create(initialState);
  }

  // Reuse client on the client-side
  if (!apolloClient) {
    apolloClient = create(initialState);
  }

  return apolloClient;
}
