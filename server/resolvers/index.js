import customerResolvers from './customer';
import supplierResolvers from './supplier';
import parrotResolvers from './parrot';
import productResolvers from './product';

const merge = require('lodash.merge');
const resolvers = mergeInfo => merge(customerResolvers, supplierResolvers, parrotResolvers, productResolvers);

export default resolvers;
