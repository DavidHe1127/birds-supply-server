const Parrot = require('../../../models/parrot.model');

const parrot = (obj, { email }) => {
  const query = {};

  if (email) {
    query.email = email;
  }

  return Parrot.findOne(query);
};

module.exports = parrot;
