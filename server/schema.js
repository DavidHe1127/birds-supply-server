import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import customerQuery from './types/customer/query.graphql';
import supplierQuery from './types/supplier/query.graphql';
import parrotQuery from './types/parrot/query.graphql';
import productQuery from './types/product/query.graphql';
import userQuery from './types/user/query.graphql';

import customerMutation from './types/customer/mutation.graphql';
import parrotMutation from './types/parrot/mutation.graphql';
import productMutation from './types/product/mutation.graphql';

import resolvers from './resolvers';
import directiveResolvers from './directives';

const add = base => (...topping) => [base, ...topping];

const common = `
  interface Node {
    id: ID!
  }

  directive @isAuthenticated on QUERY | FIELD
  directive @hasScope(scope: [String]) on QUERY | FIELD

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

const addOnTop = add(common);

// turn type def in template string into executable schema object
const linkTypeDef = `
  extend type SupplierParrotsEdge {
    node: Parrot
  }

  extend type Product {
    parrot: Parrot
    supplier: Supplier
  }

  extend type User {
    products(
      skip: Int
      after: String
      before: String
      first: Int
      last: Int
    ): ProductConnection
  }
`;

// extend type Query {
//   id: ID!
// }

const parrotSchema = makeExecutableSchema({
  typeDefs: addOnTop(parrotQuery, parrotMutation)
});

const supplierSchema = makeExecutableSchema({
  typeDefs: addOnTop(supplierQuery)
});

const customerSchema = makeExecutableSchema({
  typeDefs: addOnTop(customerQuery, customerMutation)
});

const productSchema = makeExecutableSchema({
  typeDefs: addOnTop(productQuery, productMutation)
});

const userSchema = makeExecutableSchema({
  typeDefs: addOnTop(userQuery)
});

const schema = mergeSchemas({
  schemas: [
    customerSchema,
    supplierSchema,
    parrotSchema,
    productSchema,
    userSchema,
    linkTypeDef
  ],
  resolvers,
  directiveResolvers
});

export { schema };
