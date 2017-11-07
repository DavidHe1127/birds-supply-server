import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import types from './schemas/types.graphql';

import employeeQuery from './schemas/employee/query.graphql';
import companyQuery from './schemas/company/query.graphql';

import employeeMutation from './schemas/employee/mutation.graphql';

import { resolvers } from './resolvers';

const merge = types => (...args) => {
  return [types, ...args];
};

const includeTypes = merge(types);

// console.log(includeTypes(employeeQuery, employeeMutation));
// turn type def in template string into executable schema object
const employeeSchema = makeExecutableSchema({
  typeDefs: includeTypes(employeeQuery, employeeMutation)
});

const companySchema = makeExecutableSchema({
  typeDefs: includeTypes(companyQuery)
});

const schema = mergeSchemas({
  schemas: [employeeSchema, companySchema],
  resolvers
});

export { schema };
