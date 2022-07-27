const data = require('../data/zoo_data');

const objSpecies = data.species;
const firstConditional = (options) => {
  if (!options || !options.includeNames || options.includeNames.sex === 'female') {
    const ne = objSpecies.filter((speciesInNe) => speciesInNe.location === 'NE')
      .map((animal) => animal.name);
    const nw = objSpecies.filter((speciesInNw) => speciesInNw.location === 'NW')
      .map((animal) => animal.name);
    const se = objSpecies.filter((speciesInSe) => speciesInSe.location === 'SE')
      .map((animal) => animal.name);
    const sw = objSpecies.filter((speciesInSw) => speciesInSw.location === 'SW')
      .map((animal) => animal.name);
    const animalByRegion = {
      NE: ne,
      NW: nw,
      SE: se,
      SW: sw,
    };
    return animalByRegion;
  }
};
// Bloco de variáveis(e possiveis funções) utilizadas funções de condicional
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const one = objSpecies.filter((speciesInNe) => speciesInNe.location === 'NE');
const onw = objSpecies.filter((speciesInNw) => speciesInNw.location === 'NW');
const ose = objSpecies.filter((speciesInSe) => speciesInSe.location === 'SE');
const osw = objSpecies.filter((speciesInSw) => speciesInSw.location === 'SW');
const neGroup = [];
const nwGroup = [];
const seGroup = [];
const swGroup = [];
one.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name);
  neGroup.push(obj);
});
onw.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name);
  nwGroup.push(obj);
});
ose.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name);
  seGroup.push(obj);
});
osw.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name);
  swGroup.push(obj);
});
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
const secondCnditional = (options) => {
  if (options.sex === 'female' && options.sorted === true) {
    const objAnimal = { NE: neGroup, NW: nwGroup, SE: seGroup, SW: swGroup };
    return objAnimal;
  }
};
const thirdConditional = (options) => {
  if (options.includeNames === true) {
    const objAnimal = { NE: neGroup, NW: nwGroup, SE: seGroup, SW: swGroup };
    return objAnimal;
  }
};
const neNewArray = [];
const nwNewArray = [];
const seNewArray = [];
const swNewArray = [];
one.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name).sort();
  neNewArray.push(obj);
});
onw.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name).sort();
  nwNewArray.push(obj);
});
ose.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name).sort();
  seNewArray.push(obj);
});
osw.forEach((specieObject) => {
  const obj = {};
  obj[`${specieObject.name}`] = specieObject.residents.map((animal) => animal.name).sort();
  swNewArray.push(obj);
});
const fourthConditional = (options) => {
  if (options.sorted === true) {
    const ordListAnimal = { NE: neNewArray, NW: nwNewArray, SE: seNewArray, SW: swNewArray };
    return ordListAnimal;
  }
};
function getAnimalMap(options) {
  return firstConditional(options)
    || secondCnditional(options)
    || thirdConditional(options)
    || fourthConditional(options);
}
module.exports = getAnimalMap;
// console.log(getAnimalMap())
