const Parrot = require('../../../models/parrot.model');

const addParrot = (root, args) => {
  const { name, size, mass, range, lifespan, species, code } = args.input;

  return new Parrot({
    name,
    size,
    mass,
    range,
    lifespan,
    species,
    code
  }).save();
};

module.exports = addParrot;
