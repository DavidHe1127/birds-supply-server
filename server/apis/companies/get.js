const Company = require('../../models/company.model');

const get = id => Company.findById(id);

export default get;
