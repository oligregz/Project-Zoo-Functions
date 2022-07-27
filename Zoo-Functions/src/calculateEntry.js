const data = require('../data/zoo_data');

function countEntrants(entrants) {
  // 1 - separar  e retornar 'adult' , 'chldren' e 'senior' em um objeto.
  const apartChild = entrants.filter((child) => child.age < 18).length;
  const apartAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const apartSenior = entrants.filter((senior) => senior.age >= 50).length;
  return {
    child: apartChild,
    adult: apartAdult,
    senior: apartSenior,
  };
}

function calculateEntry(entrants) {
  // 1 - resgatar o objeto de preços
  const price = data.prices;
  // 2 - retorna 0 se receber um bojeto vazio como parametro ou se nenhum parametro for passado
  if (!entrants || Object.keys(entrants).length === 0) {
    return 0;
  }
  // 3 - retorna a soma de preços
  const apartChild = entrants.filter((child) => child.age < 18).length;
  const apartAdult = entrants.filter((adult) => adult.age >= 18 && adult.age < 50).length;
  const apartSenior = entrants.filter((senior) => senior.age >= 50).length;
  const totalPrice = (apartChild * price.child)
    + (apartAdult * price.adult)
    + (apartSenior * price.senior);
  return totalPrice;
}

module.exports = { calculateEntry, countEntrants };
