const data = require('../data/zoo_data');

function getAnimalsOlderThan(animal, age) {
  const recoverSpecieForName = data.species.find((specie) => specie.name === animal);
  return recoverSpecieForName.residents.every((checkAgeAnimal) => checkAgeAnimal.age > age);
}
module.exports = getAnimalsOlderThan;
