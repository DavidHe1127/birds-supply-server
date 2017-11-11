import { makeExecutableSchema, mergeSchemas } from 'graphql-tools';

import employeeQuery from './types/employee/query.graphql';
import companyQuery from './types/company/query.graphql';

import employeeMutation from './types/employee/mutation.graphql';

import resolvers from './resolvers';

console.log(resolvers);


// console.log(includeTypes(employeeQuery, employeeMutation));
// turn type def in template string into executable schema object
const employeeSchema = makeExecutableSchema({
  typeDefs: [employeeQuery, employeeMutation]
});

const companySchema = makeExecutableSchema({
  typeDefs: [companyQuery]
});

const linkTypeDef = `
  extend type Company {
    employees: [Employee]
  }
`;

const schema = mergeSchemas({
  schemas: [employeeSchema, companySchema, linkTypeDef],
  resolvers
});

export { schema };
