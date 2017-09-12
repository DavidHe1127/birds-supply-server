import {
  makeExecutableSchema
} from 'graphql-tools';

import { resolvers } from './resolvers';

// ! denotes a required field
const typeDefs = `

  type Channel {
    id: ID!,
    name: String
  }

  type Query {
    channels: [Channel]
  }
`;

// turns type definitions into an executable schema to which we can add custom resolvers
// resolvers tell server how to resolve each part of a query
const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
