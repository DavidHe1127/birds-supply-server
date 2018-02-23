import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import typeDefs from './types/schema.graphql';

import resolvers from './resolvers';
import directiveResolvers from './directives';

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
  directiveResolvers
});

export default schema;
