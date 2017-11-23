const Parrot = require('../../../models/parrot.model');

const addParrot = (root, args) => {
  const { name, size, mass, distribution, lifespan, species, code } = args.input;

  return new Parrot({
    name,
    size,
    mass,
    distribution,
    lifespan,
    species,
    code
  }).save();
};

module.exports = addParrot;
