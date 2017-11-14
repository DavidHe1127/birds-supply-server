const Employee = require('../../../models/employee.model');
const Company = require('../../../models/company.model');

const setEmployee = async (root, args) => {
  const { email, admin, company_id, _id } = args.input;

  const oldEmployee = await Employee.findById(_id);

  const updates = {};

  if (email !== oldEmployee.email) {
    updates.email = email;
  }

  if (admin !== oldEmployee.admin) {
    updates.admin = admin;
  }

  if (!oldEmployee.company_id.equals(company_id)) {
    updates.company_id = company_id;
  }

  if (Object.values(updates).length === 0) {
    return oldEmployee;
  }

  const employee = await oldEmployee.update(updates);

  if (updates.hasOwnProperty('company_id')) {
    await Company.update(
      {
        _id: oldEmployee.company_id
      },
      {
        $pull: {
          employees: {
            _id: _id
          }
        }
      }
    );

    await Company.update(
      {
        _id: company_id
      },
      {
        $push: {
          employees: employee
        }
      }
    );
  }

  return employee;
};

module.exports = setEmployee;

