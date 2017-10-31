import restify from 'restify';
import { graphqlRestify, graphiqlRestify } from 'apollo-server-restify';
import { schema } from './schema';

const connect = require('./db/conn');

const PORT = 4000;

const server = restify.createServer({
  title: 'GraphQL Server'
});

const graphQLOptions = { schema };

server.use(restify.plugins.bodyParser());
server.use(restify.plugins.queryParser());

server.post('/graphql', graphqlRestify(graphQLOptions));
server.get('/graphql', graphqlRestify(graphQLOptions));

server.get('/graphiql', graphiqlRestify({ endpointURL: '/graphql' }));

server.listen(PORT, () => {
  connect();
  console.log(`Listening on ${PORT}`);
});
