import filter from './apis/companies/filter';
import get from './apis/companies/get';

const companies = (obj, args) => filter({});

const company = (obj, { id }, context, info) => get(id);

// resolve type Company's field employees
const Company = {
  employees: company => company.employees
};

export { company, companies };

export default Company;
