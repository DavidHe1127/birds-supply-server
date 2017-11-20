const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema(
  {
    sku: {
      type: String,
      required: true
    },

    qty: {
      type: Number
    },

    // store in cents
    price: {
      type: Number
    },

    link: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Parrot'
    }
  },
  {
    collection: 'products'
  }
);

module.exports = mongoose.model('Product', ProductSchema);
