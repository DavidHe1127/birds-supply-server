import employeeResolvers from './employee';
import companyResolvers from './company';

const merge = require('lodash.merge');
const resolvers = mergeInfo => merge(employeeResolvers, companyResolvers);

export default resolvers
