const Customer = require('../../models/customer.model');

const delCustomer = (root, args) => {
  const { _id } = args.input;

  return Customer.findByIdAndRemove(_id);
};

module.exports = delCustomer;
