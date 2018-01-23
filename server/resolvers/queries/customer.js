const Customer = require('../../models/customer.model');

const customer = (obj, { email }) => {
  const query = {};

  if (email) {
    query.email = email;
  }

  return Customer.findOne(query);
};

module.exports = customer;
