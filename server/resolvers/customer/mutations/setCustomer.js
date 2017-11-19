const Customer = require('../../../models/customer.model');

const setCustomer = async (root, args) => {
  const { email, _id } = args.input;

  const customer = await Customer.update({
    _id
  }, {
    email
  });

  return customer;
};

module.exports = setCustomer;

