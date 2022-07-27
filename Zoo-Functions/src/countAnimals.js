const data = require('../data/zoo_data');

function countAnimals(animal) {
  const animalObject = {};
  // First codition ------------------------------------------------------------
  if (!animal) {
    data.species.forEach((specie) => {
      animalObject[specie.name] = specie.residents.length;
    });
    return animalObject;
  }
  // Second codition ------------------------------------------------------------
  if (Object.keys(animal).length === 1) {
    return data.species
      .filter((specie) => specie.name === animal.specie)[0].residents.length;
  }
  // Last codition ------------------------------------------------------------
  return data.species
    .filter((specie) => specie.name === animal.specie)[0].residents
    .filter((concatDobleCond) => concatDobleCond.sex === animal.sex).length;
}

module.exports = countAnimals;
// THIS REQ WAS HELPED BY JOÃO VICTOR LENNY
