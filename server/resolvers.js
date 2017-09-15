const employees = require('./db.json').employees;

export const resolvers = {
  Query: {
    employees: (obj, { first_name, email }, context, info) => {
      if (first_name) {
        return employees.find(x => x.first_name === first_name);
      }

      if (email) {
        return employees.find(x => x.email === email);
      }

      return employees;
    }
  }
};
