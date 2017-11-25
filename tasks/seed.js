const connect = require('../server/db/conn');
const Parrots = require('../server/models/parrot.model');

const parrots = require('./seeds/parrots.json');

doIt();

async function doIt () {
  connect();
  const res = await Parrots.insertMany(parrots);
  console.log(res);
}
