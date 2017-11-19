import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import customerQuery from './types/customer/query.graphql';
import companyQuery from './types/company/query.graphql';

import customerMutation from './types/customer/mutation.graphql';

import resolvers from './resolvers';

// console.log(includeTypes(customerQuery, customerMutation));
// turn type def in template string into executable schema object
const customerSchema = makeExecutableSchema({
  typeDefs: [customerQuery, customerMutation]
});

const companySchema = makeExecutableSchema({
  typeDefs: [companyQuery]
});

// const linkTypeDef = `
//   extend type Company {
//     customers: [Customer]
//   }
// `;

const schema = mergeSchemas({
  schemas: [customerSchema, companySchema, /*linkTypeDef*/],
  resolvers
});

export { schema };
