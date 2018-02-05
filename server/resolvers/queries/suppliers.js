const Suppliers = require('../../models/supplier.model');
const { connectionFromArray } = require('graphql-relay');

const suppliers = async (obj, args) => {
  const suppliersDB = await Suppliers.find({}).then(res => connectionFromArray(res, args));

  return Object.assign(suppliersDB, { count: suppliersDB.edges.length || 0 });
}

module.exports = suppliers;
