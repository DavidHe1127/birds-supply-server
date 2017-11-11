// query
import * as companyQueryResolvers from './company/query';
import * as employeeQueryResolvers from './employee/query';

// mutation
import * as employeeMutationResolvers from './employee/mutation';

const resolvers = mergeInfo => ({
  Query: {
    ...companyQueryResolvers.Query,
    ...employeeQueryResolvers
  },
  Mutation: {
    ...employeeMutationResolvers
  }
});

console.log(resolvers());

export default resolvers;
