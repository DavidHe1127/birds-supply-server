const Companies = require('../../models/company.model');

const filter = query => Companies.find(query);

export default filter;
