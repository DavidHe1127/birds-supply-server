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

const Model = require(`../server/models/${file}.model`);

const readFile = promisify(fs.readFile);

async function doIt (name) {
  connect();

  const ext = name.includes('.') && name.split('.').slice(-1)[0];
  let fullName = ext ? name : name + '.json';

  // could require json file, but use readFile to demo promisify
  const content = await readFile(path.join(__dirname, 'inputs', fullName), 'utf8');

  try {
    const json = JSON.parse(content);
    json.forEach(async x => {
      x.id = mongoose.Schema.Types.ObjectId;
      const model = new Model(x);
      await model.save();
    });
  } catch (err) {
    throw new Error('invalid json input');
  }

  // process.exit(0);
}

doIt(file);

  // {
  //   "first_name": "Talya",
  //   "last_name": "Kupis",
  //   "admin": false,
  //   "email": "tkupis1@indiegogo.com",
  //   "gender": "Female",
  //   "ip_address": "132.6.14.100"
  // },
  // {
  //   "first_name": "Brice",
  //   "last_name": "Stubbert",
  //   "email": "bstubbert2@unblog.fr",
  //   "gender": "Male",
  //   "admin": false,
  //   "ip_address": "238.110.45.51"
  // },
  // {
  //   "first_name": "Annabel",
  //   "last_name": "Abramowitch",
  //   "admin": false,
  //   "email": "aabramowitch3@1und1.de",
  //   "gender": "Female",
  //   "ip_address": "233.23.225.4"
  // },
  // {
  //   "first_name": "Dill",
  //   "last_name": "Cradock",
  //   "admin": false,
  //   "email": "dcradock4@reverbnation.com",
  //   "gender": "Male",
  //   "ip_address": "174.36.229.40"
  // },
  // {
  //   "first_name": "Terese",
  //   "last_name": "Leggis",
  //   "admin": false,
  //   "email": "tleggis5@newyorker.com",
  //   "gender": "Female",
  //   "ip_address": "233.44.167.200"
  // },
  // {
  //   "first_name": "Thane",
  //   "last_name": "Dowles",
  //   "admin": false,
  //   "email": "tdowles6@theguardian.com",
  //   "gender": "Male",
  //   "ip_address": "70.230.185.180"
  // },
  // {
  //   "first_name": "Elston",
  //   "last_name": "Sammes",
  //   "admin": false,
  //   "email": "esammes7@patch.com",
  //   "gender": "Male",
  //   "ip_address": "131.108.244.161"
  // },
  // {
  //   "first_name": "Wolf",
  //   "last_name": "Pesterfield",
  //   "admin": false,
  //   "email": "wpesterfield8@uol.com.br",
  //   "gender": "Male",
  //   "ip_address": "196.138.145.164"
  // },
  // {
  //   "first_name": "Pepi",
  //   "last_name": "Siely",
  //   "admin": false,
  //   "email": "psiely9@msu.edu",
  //   "gender": "Female",
  //   "ip_address": "123.248.152.18"
  // },
  // {
  //   "first_name": "Dallas",
  //   "last_name": "Tribe",
  //   "admin": false,
  //   "email": "dtribea@yellowbook.com",
  //   "gender": "Female",
  //   "ip_address": "62.230.234.17"
  // },
  // {
  //   "first_name": "Niki",
  //   "last_name": "Lugton",
  //   "admin": false,
  //   "email": "nlugtonb@businessinsider.com",
  //   "gender": "Male",
  //   "ip_address": "136.25.10.175"
  // },
  // {
  //   "first_name": "Kitti",
  //   "last_name": "Bettenay",
  //   "admin": false,
  //   "email": "kbettenayc@addtoany.com",
  //   "gender": "Female",
  //   "ip_address": "3.186.41.43"
  // },
  // {
  //   "first_name": "Agosto",
  //   "admin": false,
  //   "last_name": "Emeney",
  //   "email": "aemeneyd@statcounter.com",
  //   "gender": "Male",
  //   "ip_address": "174.245.51.102"
  // },
  // {
  //   "first_name": "Chrisse",
  //   "admin": false,
  //   "last_name": "Escalera",
  //   "email": "cescalerae@state.gov",
  //   "gender": "Male",
  //   "ip_address": "58.94.82.177"
  // },
  // {
  //   "first_name": "Fay",
  //   "admin": false,
  //   "last_name": "Calrow",
  //   "email": "fcalrowf@mit.edu",
  //   "gender": "Female",
  //   "ip_address": "7.58.179.32"
  // },
  // {
  //   "first_name": "Cordi",
  //   "admin": false,
  //   "last_name": "Barrus",
  //   "email": "cbarrusg@weibo.com",
  //   "gender": "Female",
  //   "ip_address": "194.83.227.134"
  // },
  // {
  //   "first_name": "Gayle",
  //   "admin": false,
  //   "last_name": "Pavlik",
  //   "email": "gpavlikh@foxnews.com",
  //   "gender": "Female",
  //   "ip_address": "125.138.47.249"
  // },
  // {
  //   "first_name": "Ketti",
  //   "last_name": "Breydin",
  //   "admin": true,
  //   "email": "kbreydini@skyrock.com",
  //   "gender": "Female",
  //   "ip_address": "61.63.234.216"
  // },
  // {
  //   "first_name": "Nils",
  //   "admin": true,
  //   "last_name": "Andrivot",
  //   "email": "nandrivotj@meetup.com",
  //   "gender": "Male",
  //   "ip_address": "142.178.126.82"
  // }
