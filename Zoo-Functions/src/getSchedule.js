const data = require('../data/zoo_data');

const workDays = Object.keys(data.hours);
const workAimal = (animal) => data.species.some((specie) => specie.name === animal);

const scheduleOfWeeks = () => {
  const productSchedule = {};
  workDays.forEach((dayWork) => {
    const { open, close } = data.hours[dayWork];
    productSchedule[dayWork] = {
      officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
      exhibition: open === 0 ? 'The zoo will be closed!'
        : data.species.filter((speci) => speci.availability
          .includes(dayWork)).map((nome) => nome.name),
    };
  });
  return productSchedule;
};
const scheduleDays = (dayWork) => {
  const productSchedule = {};
  const { open, close } = data.hours[dayWork];
  productSchedule[dayWork] = {
    officeHour: open === 0 ? 'CLOSED' : `Open from ${open}am until ${close}pm`,
    exhibition: open === 0 ? 'The zoo will be closed!'
      : data.species.filter((speci) => speci.availability
        .includes(dayWork)).map((nome) => nome.name),
  };
  return productSchedule;
};

const animalistcSchedule = (animal) => data.species
  .filter((specie) => specie.name === animal)[0].availability;

function getSchedule(scheduleTarget = '') {
  if (!workDays.includes(scheduleTarget) && !workAimal(scheduleTarget)) {
    return scheduleOfWeeks();
  } if (workDays.includes(scheduleTarget) && !workAimal(scheduleTarget)) {
    return scheduleDays(scheduleTarget);
  }
  return animalistcSchedule(scheduleTarget);
}
module.exports = getSchedule;
// helped by reference code Leny
