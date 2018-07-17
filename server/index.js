import restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import './env';
import './firebase';
import schema from './schema';
import { formatError } from 'apollo-errors';

import { UnauthenticatedError } from './errors' ;

const corsMiddleware = require('restify-cors-middleware');

const cors = corsMiddleware({
  preflightMaxAge: 5,
  origins: ['*'],
  allowHeaders: ['API-Token', 'Authorization'],
  exposeHeaders: ['Location']
});

global._root = __dirname + '/'; // eslint-disable-line

const connect = require('./db/conn');

const PORT = 4000;

const server = restify.createServer({
  title: 'GraphQL Server'
});

server.pre(cors.preflight);
server.use(cors.actual);

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify((req, res) => ({
  schema,
  formatError: error => {
    if (error.originalError instanceof UnauthenticatedError) {
      res.status(401);
      res.set('Location', '/login');
    } else {
      res.status(500);
    }

    return error;
  },
  context: {
    headers: {
      Authorization: req.header('Authorization')
    }
  }
})));

// for relay to get schema
server.get('/graphql', graphqlRestify({
  schema
}));

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(PORT, () => {
  connect();
  console.log(`Listening on ${PORT}`);
});
