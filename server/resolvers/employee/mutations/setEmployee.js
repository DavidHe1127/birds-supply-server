const Employee = require('../../../models/employee.model');

const Employee = (root, args) => {
  const {
    email,
    admin,
    company_id,
    _id
  } = args.input;



  Employee.findByIdAndUpdate(_id, {$set: {email, admin, company_id}})



};

Employee.schema.post('findOneAndUpdate')


Tank.findByIdAndUpdate(id, { $set: { size: 'large' }}, { new: true }, function (err, tank) {
  if (err) return handleError(err);
  res.send(tank);
});

module.exports = addEmployee;
