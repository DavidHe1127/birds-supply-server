import customerResolvers from './customer';
import supplierResolvers from './supplier';
import parrotResolvers from './parrot';

const merge = require('lodash.merge');
const resolvers = mergeInfo => merge(customerResolvers, supplierResolvers, parrotResolvers);

export default resolvers;
