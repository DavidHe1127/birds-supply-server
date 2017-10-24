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

    company: (obj, { id }, context, info) => {
      if (id) {
        return companies.find(x => x.id == id);
      }

      return null;
    },

    allAdmins: (obj, { company_id }) => {
      if (company_id) {
        return employees.filter(x => x.company_id == company_id && x.admin);
      }

      return null;
    }
  },

  // resolve type Company's field employees
  Company: {
    employees: (company) => {
      return employees.filter(x => x.company_id === company.id);
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
