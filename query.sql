-- basic query
query getSomething {
  employees {
    id
    first_name
  }
}

-- with argument
query getEmployeesByCompany($company_id: ID!) {
  employees(company_id: $company_id) {
    id
    first_name
  }
}

{
  "company_id": 1
}
