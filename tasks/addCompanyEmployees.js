const args = process.argv.slice(2);

if (args.length !== 1) {
  throw new Error('Only one file can be passed');
}

const [file] = args;

const { promisify } = require('util');
const fs = require('fs');
const connect = require('../server/db/conn');
const path = require('path');

const Model = require(`../server/models/${file}.model`);
const Employee = require(`../server/models/employee.model`);

const readFile = promisify(fs.readFile);

async function doIt (name) {
  connect();

  const ext = name.includes('.') && name.split('.').slice(-1)[0];
  let fullName = ext ? name : name + '.json';

  // could require json file, but use readFile to demo promisify
  const content = await readFile(
    path.join(__dirname, 'inputs', fullName),
    'utf8'
  );

  try {
    const json = JSON.parse(content);
    for (const j of json) {
      const model = new Model(j);
      const { _id, employees } = await model.save();

      for (const e of employees) {
        const employee = e.toJSON();
        employee.company = _id;
        await new Employee(employee).save();
      }
    }
    process.exit(0);
  } catch (err) {
    throw new Error(err);
  }
}

doIt(file);
