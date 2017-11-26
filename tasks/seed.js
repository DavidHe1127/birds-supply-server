const mongoose = require('mongoose');

const connect = require('../server/db/conn');
const Parrots = require('../server/models/parrot.model');
const Suppliers = require('../server/models/supplier.model');

const parrots = require('./seeds/parrots.json');
const suppliers = require('./seeds/suppliers.json');

// IIFE
(async () => {
  connect();

  await mongoose.connection.collections.suppliers.drop();
  await mongoose.connection.collections.parrots.drop();

  const syncedParrots = await Parrots.insertMany(parrots);

  const suppliersToSync = suppliers.map(s => ({
    ...s,
    parrots: s.parrots.map(p => syncedParrots.find(x => x.code === p)._id)
  }));

  await Suppliers.insertMany(suppliersToSync);

  process.exit();
})().catch(err => {
  console.error(err);
  process.exit(1);
});
