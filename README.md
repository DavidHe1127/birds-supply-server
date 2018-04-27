## Bird Supply Server

A platform that connects bird lovers and suppliers together.

### Prerequisites

#### MongoDB
We use `mongodb` as the database which means to be able to run the app, you need to install `mongodb` server and keep it running in the background while running birds supply server.

Please ask your lovely friend `Google` about how to install `mongodb`.

#### AWS Cognito
Save `config_sample.json` under project root as `config.json` and put it under `server/` folder.
You should replace your own `Cognito` configurations in the `config_sample.json`.
```
{
  "region": "<COGNITO_REGION>",
  "identityPoolId": "<COGNITO_IDENTITY_POOL_ID>",
  "userPoolId": "<COGNITO_USER_POOL_ID>",
  "userPoolWebClientId": "<COGNITO_WEB_CLIENT_ID>"
}


```

### How to run the app
* Run `npm i` from the root to install required `npm` dependencies
* Run `npm run seed` to load data set into `mongodb`
* For `Mac` users, run `npm start`
  For `Windows` users, you need to ensure your `mongodb` is already running at the background and run `npm run win` under the project root

### Graphiql Interface
Go to `http://localhost:4000/graphiql` to write and test your `graphql` queries

### TODO
 * Avoid sending user id in query when it is not available in context
 * Add signup page/logic
 * Research on [Apollo mongodb connector](https://github.com/apollographql/graphql-tools/blob/master/designs/connectors.md) to see if it brings any benefits and has a fit in our app
 * Add validations
 * Replace directiveResolvers with SchemaDirectiveVisitor
 * Add subscriptions
 * Add dataloader

### Deployment
 * Test containers communication locally via docker compose
 * Deploy it on EC2 using ECS follow guide on effective_devops_with_aws (docker installed)

### Reading
 * graphql-compose-relay

### ONGOING
 * Add more seed data

### Tech stack
  * front-end
    * relay-modern
  * back-end
    * Apollo Restify Server
  * database
    * mongodb
    * mongoose

