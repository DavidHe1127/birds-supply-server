const mongoose = require('mongoose');

// use node promise to overwrite mongoose built-in promise implementations
mongoose.Promise = global.Promise;

const uri = 'mongodb://localhost:27017/graphql-playpen';

module.exports = () =>
  mongoose
    .connect(uri, {
      useMongoClient: true
    })
    .then(res => {
      console.log('mongodb connected');
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
