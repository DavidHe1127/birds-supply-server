const Parrots = require('../../models/parrot.model');

const ifParrotExist = async (obj, { code }) => {
  const query = {};

  if (code) {
    query.code = code;
  }

  const res = await Parrots.find().where(query);

  return res.length > 0;
};

module.exports = ifParrotExist;
