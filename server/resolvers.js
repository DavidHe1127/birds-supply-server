const employees = require('./db.json').employees;

// const channels = [{
//   id: 1,
//   name: 'soccer'
// }, {
//   id: 2,
//   name: 'baseball'
// }];

export const resolvers = {
  Query: {
    employees: (obj, args, context, info) => {
      console.log(args);
      if (!args.first_name) {
        return employees;
      }

      return employees.filter(x => x.first_name === args.first_name);
    }
  }
};
