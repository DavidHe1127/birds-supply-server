import restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import { schema } from './schema';
import auth from './auth';

const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['API-Token', 'Authorization'],
  exposeHeaders: ['API-Token-Expiry']
});

global._root = __dirname + '/'; // eslint-disable-line

const connect = require('./db/conn');

const PORT = 4000;

const server = restify.createServer({
  title: 'GraphQL Server'
});

const graphQLOptions = { schema };

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify(req => ({
  schema
})));

server.get('/graphql', graphqlRestify(graphQLOptions));

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(PORT, () => {
  connect();
  console.log(`Listening on ${PORT}`);
});
