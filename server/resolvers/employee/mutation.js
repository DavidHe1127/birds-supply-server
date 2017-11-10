import add from './apis/employees/add';

const addEmployee = (root, args) => add(args.input);

export { addEmployee };
