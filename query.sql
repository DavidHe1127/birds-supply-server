-- basic query
query getSomething {
  channels {
    name,
    id
  }
}

-- with argument
query getSomething($name: String) {
  channels(name: $name) {
    name
    id
  }
}

{
  "name": "soccer"
}
