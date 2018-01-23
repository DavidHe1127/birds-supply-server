const Parrot = require('../../models/parrot.model');

const parrot = (obj, { id, code }) => {
  const query = {};

  if (id) {
    query._id = id;
  }

  if (code) {
    query.code = code;
  }

  return Parrot.findOne(query);
};

module.exports = parrot;
