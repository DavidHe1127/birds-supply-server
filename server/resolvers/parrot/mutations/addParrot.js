const Parrot = require('../../../models/parrot.model');

const addParrot = (root, args) => {
  const { name, size, mass, distribution, lifespan, species, code } = args.input;

  if (!Parrot.schema.paths.species.enumValues.includes(species)) {
    return null;
  }

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
