-- basic query
query getSomething {
  employees {
    id
    first_name
  }
}

-- with argument
query getSomething($first_name: String) {
  employees(first_name: $first_name) {
    id
    first_name
  }
}

{
  "first_name": "Ketti"
}
