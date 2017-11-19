const Customer = require('../../../models/customer.model');

const addCustomer = (root, args) => {
  const {
    first_name,
    last_name,
    email,
    gender
  } = args.input;

  return new Customer({
    first_name,
    last_name,
    email,
    gender
  }).save();
};

module.exports = addCustomer;
