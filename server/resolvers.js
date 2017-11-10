import * as employeeResolvers from './resolvers/employee/query';
import * as emp from './resolvers/employee/query';

const resolvers = mergeInfo => ({
  Query: {
    employee: (obj, { first_name, email }) => {
      const query = {};

      if (first_name) {
        query.first_name = first_name;
      }

      if (email) {
        query.email = email;
      }

      return getEmployee(query);
    },

    employees: (obj, { company_id }) => filterEmployee({ company_id }),

    companies: (obj, args) => {
      const query = {};

      return filterCompany(query);
    },

    company: (obj, { id }, context, info) => getCompany(id),

    allAdmins: (obj, { company_id }) => filterEmployee({ admin: true }),

    colleagues: (obj, { company_id, employee_id }) =>
      filterEmployee({
        company_id,
        employee_id: {
          $ne: employee_id
        }
      })
  },

  Mutation: {
    addEmployee: (root, args) => addEmployee(args.input)
  },

  // resolve type Company's field employees
  Company: {
    employees: company => company.employees
  }
});

export default resolvers;
