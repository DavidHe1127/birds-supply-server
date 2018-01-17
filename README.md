## Bird Supply Server

A platform that connects bird lovers and suppliers together

### How to run the app
 * You need mongodb server run before run `npm start`
 * Run `npm run seed` to load seeds data - only do it once

### TODO
 * Refactor resolvers and types config
 * Add edit product mutation
 * Add validations
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

