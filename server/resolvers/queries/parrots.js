const Parrots = require('../../models/parrot.model');
const { connectionFromArray } = require('graphql-relay');

const parrots = async (obj, args) => {
  const parrotsDB = await Parrots.find({}).then(res => connectionFromArray(res, args));

  return Object.assign(parrotsDB, {count: parrotsDB.edges.length || 0});
}

module.exports = parrots;
