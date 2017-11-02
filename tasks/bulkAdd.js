const args = process.argv.slice(2);

if (args.length !== 1) {
  throw new Error('Only one file can be passed');
}

const [file] = args;

const { promisify } = require('util');
const fs = require('fs');
const connect = require('../server/db/conn');
const path = require('path');
const mongoose = require('mongoose');

const Company = require('../server/models/company.model');

const readFile = promisify(fs.readFile);

async function doIt(name) {
  connect();
  const content = await readFile(path.join(__dirname, 'inputs', name), 'utf8');

  try {
    const json = JSON.parse(content);
    json.filter(async x => {
      x.id = mongoose.Schema.Types.ObjectId;
      const company = new Company(x);
      await company.save();
    });
  } catch(err) {
    throw new Error('invalid json input');
  }
}
