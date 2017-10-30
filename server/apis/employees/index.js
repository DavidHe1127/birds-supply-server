class Employee {
  constructor({
    first_name,
    last_name,
    email,
    gender,
    company_id,
    admin,
    ip_address
  }) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.email = email;
    this.gender = gender;
    this.company_id = company_id;
    this.admin = admin;
    this.ip_address = ip_address;
  }
}

export default Employee;
