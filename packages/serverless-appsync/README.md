# serverless-appsync

A GraphQL-powered backend, running on AWS AppSync and deployed via the serverless framework.

## Deploy

```bash
yarn deploy

# to debug
SLS_DEBUG=* yarn deploy

# for production
yarn deploy -s prod
```

To launch GraphQL Playground:

```bash
yarn playground
```
