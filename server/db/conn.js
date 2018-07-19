const mongoose = require('mongoose');

// use node promise to overwrite mongoose built-in promise implementations
mongoose.Promise = global.Promise;

module.exports = () =>
  mongoose
    .connect(process.env.MONGO_URI)
    .then(res => {
      console.log('mongodb connected');
    })
    .catch(err => {
      console.error(err);
      process.exit(1);
    });
