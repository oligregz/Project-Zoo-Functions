const data = require('../data/zoo_data');

// Implementa o spread operator no param de getSpeciesById
// para que se possa usar e manipluar mais de um id,
// caso contráriao, teria que adicionar todos em um objeto( de preferência: array)

function getSpeciesByIds(...ids) {
  // Cria uma arrowFunc com um func.map dentro da mesma para percorrer
  // os ids passados e retorna-los em um novo array somente os
  // elementos que contem o(s) id passado como param
  const selectionIds = ids.map((id) => data.species.find((specie) => specie.id === id));
  return !ids ? [] : selectionIds;
}

module.exports = getSpeciesByIds;
