## Bird Supply Server

A platform that connects bird lovers and suppliers together

### How to run the app
We use `mongodb` as the database which means to be able to run the app, you need to install `mongodb` server and keep it running in the background while running birds supply server.

Please ask your lovely friend `Google` about how to install `mongodb`. Once it's installed, follow steps as follow to configure and launch the app.

* Run `npm i` from the root to install required `npm` dependencies
* Run `npm run seed` to load data set into `mongodb`
* For `Mac` users, run `npm start`
  For `Windows` users, you need to ensure your `mongodb` is already running at the background and run `npm run win` under the project root
  
### Graphiql Interface
Go to `http://localhost:4000/graphiql` to write and test your `graphql` queries

### TODO
 * Add Auth i.e login/logout/signup
 * Add validations
 * Refactor resolvers and types config
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

