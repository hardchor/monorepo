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

To launch GraphQL Playground:

```bash
yarn playground
```
