const mongoose = require('mongoose');

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

  parrots: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Parrot'
  }]

}, {
  collection: 'suppliers',
  _id: false
});

module.exports = mongoose.model('Supplier', SupplierSchema);
