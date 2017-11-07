import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import employeeQuery from './schemas/employee/query.graphql';
import companyQuery from './schemas/company/query.graphql';

import employeeMutation from './schemas/employee/mutation.graphql';

import { resolvers } from './resolvers';

// 1. ! denotes a required field
// 2. Channel and Query are Object Type
// 3. two special types Query and Mutation (Optional)
// Query and Mutation 'entry point'

// turns type definitions into an executable schema to which we can add custom resolvers
// resolvers tell server how to resolve each part of a query
const employeeSchema = makeExecutableSchema({
  typeDefs: [employeeQuery, employeeMutation]
});

// const companySchema = makeExecutableSchema({
//   typeDefs: [companyQuery]
// });

console.log('xc')

const schema = mergeSchemas({
  schemas: [employeeSchema, /* companySchema */],
  // resolvers
});

export { schema };

// import {
//   makeExecutableSchema,
//   addMockFunctionsToSchema,
//   mergeSchemas,
// } from 'graphql-tools';

// // Mocked chirp schema; we don't want to worry about the schema
// // implementation right now since we're just demonstrating
// // schema stitching
// const chirpSchema = makeExecutableSchema({
//   typeDefs: `
//     type Chirp {
//       id: ID!
//       text: String
//       authorId: ID!
//     }

//     type Query {
//       chirpById(id: ID!): Chirp
//       chirpsByAuthorId(authorId: ID!): [Chirp]
//     }
//   `
// });

// addMockFunctionsToSchema({ schema: chirpSchema });

// // Mocked author schema
// const authorSchema = makeExecutableSchema({
//   typeDefs: `
//     type User {
//       id: ID!
//       email: String
//     }

//     type Query {
//       userById(id: ID!): User
//     }
//   `
// });

// // This function call adds the mocks to your schema!
// addMockFunctionsToSchema({ schema: authorSchema });
// const schema = mergeSchemas({
//   schemas: [chirpSchema, authorSchema],
// });

// export { schema };