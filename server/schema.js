import { makeExecutableSchema } from 'graphql-tools';

import { resolvers } from './resolvers';

// 1. ! denotes a required field
// 2. Channel and Query are Object Type
// 3. two special types Query and Mutation (Optional)
// Query and Mutation 'entry point'
const typeDefs = `
  enum Gender {
    Female
    Male
  }

  type Employee {
    id: ID!
    first_name: String
    last_name: String
    email: String
    ip_address: String
    gender: Gender
    colleagues: Employee
  }

  type Query {
    employee(
      first_name: String = Ketti
      email: String
    ): Employee

    employees(
      company_id: ID!
    ): [Employee]

  }
`;
// company: Company
  // type Company {
  //   id: ID!
  //   name: String
  //   address: String
  //   employees: Employee
  // }

    // companies(
    //   name: String!
    //   id: ID!
    //   employees: Employee
    // ): Company

// turns type definitions into an executable schema to which we can add custom resolvers
// resolvers tell server how to resolve each part of a query
const schema = makeExecutableSchema({ typeDefs, resolvers });

export { schema };
