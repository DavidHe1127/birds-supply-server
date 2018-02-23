import { makeExecutableSchema } from 'graphql-tools';

import typeDefs from './schema.graphql';

import resolvers from '../resolvers';
import directiveResolvers from '../directives';

export default makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers
});
