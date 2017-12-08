const mongoose = require('mongoose');

const ParrotSchema = new mongoose.Schema({

  name: {
    type: String,
    required: true
  },

  // in cms
  size: {
    type: Number,
    required: true,
    enum: [10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  },

  // in grams
  mass: {
    type: Number,
    required: true
  },

  distribution: {
    type: String,
    required: true
  },

  // in years
  lifespan: {
    type: Number,
    required: true
  },

  species: {
    type: String,
    enum: ['macaws', 'conures', 'cockatoos', 'amazons']
  },

  code: {
    type: String,
    required: true,
    unique: true,
    index: true
  },

  description: {
    type: String,
    required: true
  }

}, {
  collection: 'parrots'
});

module.exports = mongoose.model('Parrot', ParrotSchema);
