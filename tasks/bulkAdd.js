// const param = process.argv[2];

const Company = require('../server/models/company.model');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const company = new Company({
  name: "Allen's Pets",
  address: '29 Keats Ave Rockdale',
  id: mongoose.Schema.Types.ObjectId
});

company.save((err, res) => {
  console.log(err, res);
});
