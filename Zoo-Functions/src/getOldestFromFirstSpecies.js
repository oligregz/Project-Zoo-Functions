const data = require('../data/zoo_data');

function getOldestFromFirstSpecies(id) {
  const respectiveAnimal = data.employees.find((employe) => employe.id === id).responsibleFor[0];

  const ordeningAge = data.species
    .find((specie) => specie.id === respectiveAnimal).residents.map((idd) => idd.age)
    .sort((firstIdd, secondIdd) => secondIdd - firstIdd)[0];
  const returned = data.species.find((specie) => specie.id === respectiveAnimal)
    .residents.find((ret) => ret.age === ordeningAge);
  return Object.values(returned);
}
module.exports = getOldestFromFirstSpecies;
// helped by reference code Leny
