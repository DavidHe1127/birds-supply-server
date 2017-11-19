import customerResolvers from './customer';
import supplierResolvers from './supplier';

const merge = require('lodash.merge');
const resolvers = mergeInfo => merge(customerResolvers, supplierResolvers);

export default resolvers
