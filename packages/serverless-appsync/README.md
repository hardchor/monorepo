# serverless-appsync

A GraphQL-powered backend, running on AWS AppSync and deployed via the serverless framework.

## Deploy

```bash
# during development
SLS_DEBUG=* yarn deploy:watch

# deploy to staging
yarn deploy

# deploy to production
yarn deploy -s prod
```

## Develop

## Creating a new user

```bash
yarn user:create -u admin -p Password1!
```

## GraphQL Playground

To launch GraphQL Playground:

```bash
yarn playground
```
