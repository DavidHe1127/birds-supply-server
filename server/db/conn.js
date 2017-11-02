const mongoose = require('mongoose');
const config = require('config');

// use node promise to overwrite mongoose built-in promise implementations
mongoose.Promise = global.Promise;

module.exports = () =>
  mongoose
    .connect(config.get('mongo.uri'), {
      useMongoClient: true
    })
    .then(res => {
      console.log('mongodb connected');
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
