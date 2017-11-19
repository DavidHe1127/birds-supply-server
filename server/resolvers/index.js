import customerResolvers from './customer';
import companyResolvers from './company';

const merge = require('lodash.merge');
const resolvers = mergeInfo => merge(customerResolvers, companyResolvers);

export default resolvers
