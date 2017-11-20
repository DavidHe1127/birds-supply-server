import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import customerQuery from './types/customer/query.graphql';
import supplierQuery from './types/supplier/query.graphql';

console.log(supplierQuery);

import customerMutation from './types/customer/mutation.graphql';

import resolvers from './resolvers';

// turn type def in template string into executable schema object
// const customerSchema = makeExecutableSchema({
//   typeDefs: [customerQuery, customerMutation]
// });

// const supplierSchema = makeExecutableSchema({
//   typeDefs: [supplierQuery]
// });

const linkTypeDef = `
  extend type SupplierParrotsEdge {
    node: Parrot
  }
`;

const common = `
  interface Node {
    id: ID!
  }

  type PageInfo {
    # When paginating forwards, are there more items?
    hasNextPage: Boolean

    # When paginating backwards, are there more items?
    hasPreviousPage: Boolean

    # When paginating backwards, the cursor to continue.
    startCursor: String

    # When paginating forwards, the cursor to continue.
    endCursor: String
  }
`;

// const root = `
//   type Query {
//     viewer: Viewer!

//     node(
//       id: ID!
//     ): Node
//   }
// `;

const root = `
enum Gender {
  Female
  Male
}

type Customer {
  id: ID!
  first_name: String
  last_name: String
  email: String
  gender: Gender
  fucker: Fucker

}
`;

const root2 = `type Fucker {
  id: ID!
}`;

const root3 = `type Query {
  customer(email: String): Customer
  customers: [Customer]
}`;

const supplierSchema = makeExecutableSchema({
  typeDefs: [root, root2, root3]
});
console.log('xc');


// const rootSchema = makeExecutableSchema({
//   typeDefs: [root3]
// });

const schema = mergeSchemas({
  schemas: [supplierSchema],
  //, common, customerSchema, supplierSchema, linkTypeDef],
  resolvers
});

export { schema };
