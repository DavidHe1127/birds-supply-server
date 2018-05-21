import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.graphql';

import resolvers from '../resolvers';
import directiveResolvers from '../directives';

import { env } from '../utils';

const attrs = {
  typeDefs,
  resolvers,
};

// turn on directives in production
if (env.isProd) {
  attrs.directiveResolvers = directiveResolvers;
}

export default makeExecutableSchema(attrs);
