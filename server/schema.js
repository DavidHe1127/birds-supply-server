import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import customerQuery from './types/customer/query.graphql';
import supplierQuery from './types/supplier/query.graphql';

import customerMutation from './types/customer/mutation.graphql';

import resolvers from './resolvers';

// console.log(includeTypes(customerQuery, customerMutation));
// turn type def in template string into executable schema object
const customerSchema = makeExecutableSchema({
  typeDefs: [customerQuery, customerMutation]
});

const supplierSchema = makeExecutableSchema({
  typeDefs: [supplierQuery]
});

// const linkTypeDef = `
//   extend type Supplier {
//     customers: [Customer]
//   }
// `;

const schema = mergeSchemas({
  schemas: [customerSchema, supplierSchema, /*linkTypeDef*/],
  resolvers
});

export { schema };
