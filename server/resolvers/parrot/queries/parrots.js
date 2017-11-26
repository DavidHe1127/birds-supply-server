const Parrots = require('../../../models/parrot.model');
const { connectionFromArray } = require('graphql-relay');

const parrots = (obj, args) => Parrots.find({}).then(res => connectionFromArray(res, args));

module.exports = parrots;
