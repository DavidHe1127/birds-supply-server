const mongoose = require('mongoose');
const Parrot = require('./parrot.model');

const SupplierSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  code: {
    type: String,
    required: true,
    unique: true,
    index: true
  },

  parrots: [Parrot.schema]

}, {
  collection: 'suppliers'
});

module.exports = mongoose.model('Supplier', SupplierSchema);
