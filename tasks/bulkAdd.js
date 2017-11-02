const connect = require('../server/db/conn');

const Company = require('../server/models/company.model');

async function addCompany() {
  await connect();
  const company = new Company({
    name: "Allen's Pets",
    address: '29 Keats Ave Rockdale',
    id: mongoose.Schema.Types.ObjectId
  });

  const res = await company.save();
}

addCompany();
