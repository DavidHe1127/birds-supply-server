import customerResolvers from './customer';
import supplierResolvers from './supplier';
import parrotResolvers from './parrot';
import productResolvers from './product';

const merge = require('lodash.merge');

const idResolver = {
  Query: {
    id: () => 'dGhpcyBpcyBkYXZpZCBtciBoZSdzIHRlc3Q='
  }
};

const resolvers = mergeInfo =>
  merge(
    idResolver,
    customerResolvers,
    supplierResolvers,
    parrotResolvers,
    productResolvers
  );

export default resolvers;
