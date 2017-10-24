const { employees, companies } = require('./db.json');

export const resolvers = {
  Query: {
    employee: (obj, { first_name, email }, context, info) => {
      if (first_name) {
        return employees.find(x => x.first_name === first_name);
      }

      if (email) {
        return employees.find(x => x.email === email);
      }

      return null;
    },

    // use == as a hack since graphql-js coerce number into string for type id
    employees: (obj, { company_id }) =>
      employees.filter(x => x.company_id == company_id),

    companies: () => companies,

    company: (obj, { company_id }, context, info) => {
      if (company_id) {
        return companies.find(x => x.id === company_id);
      }

      return null;
    },

    allAdmins: (obj, { company_id }) => {
      if (company_id) {
        return employees.filter(x => x.company_id == company_id && x.admin);
      }

      return null;
    }
  }

  // colleagues: (obj, { employee_id }, context, info) => {
  //   const employee = employees.find(x => x.id === employee_id);
  //   let colleagues = [];

  //   if (!employee) {
  //     return colleagues;
  //   }

  //   const company = companies.find(x => x.id === employee.company_id);
  //   const employeeIds = company.employees;

  //   employees.forEach(e => employeeIds.includes(e.id) && e.id !== employee_id && colleagues.push(e));

  //   return colleagues;
  // },
};
