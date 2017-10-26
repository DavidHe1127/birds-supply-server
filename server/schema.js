import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';
import query from './schemas/query.graphql';
import mutation from './schemas/mutation.graphql';

import { resolvers } from './resolvers';

// 1. ! denotes a required field
// 2. Channel and Query are Object Type
// 3. two special types Query and Mutation (Optional)
// Query and Mutation 'entry point'

// turns type definitions into an executable schema to which we can add custom resolvers
// resolvers tell server how to resolve each part of a query
const schema = makeExecutableSchema({ typeDefs: [mutation, query], resolvers });

export { schema };
