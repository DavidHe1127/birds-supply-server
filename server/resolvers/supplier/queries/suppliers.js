const Suppliers = require('../../../models/supplier.model');
const { connectionFromArray } = require('graphql-relay');

const suppliers = (obj, args) => Suppliers.find({}).then(res => connectionFromArray(res, args));

module.exports = suppliers;
