import add from '../../apis/employees/add';

const addEmployee = (root, args) => add(args.input);

const resolvers = {
  Mutation: {
    addEmployee
  }
};

export default resolvers;
