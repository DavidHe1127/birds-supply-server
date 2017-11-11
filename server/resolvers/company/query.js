import filter from '../../apis/companies/filter';
import get from '../../apis/companies/get';

const companies = (obj, args) => filter({});

const company = (obj, { id }, context, info) => get(id);

const queries = {
  companies,
  company
};

const resolvers = {
  Query: queries,

  // resolve type Company's field employees
  Company: {
    employees: company => company.employees
  }
};

export default resolvers;
