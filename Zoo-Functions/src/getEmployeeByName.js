const data = require('../data/zoo_data');

function getEmployeeByName(employeeName) {
  const employeesRecovered = data.employees;
  const recoverByFirstOrLastName = employeesRecovered
    .find((nameRec) => nameRec.firstName === employeeName || nameRec.lastName === employeeName);
  return !employeeName ? {} : recoverByFirstOrLastName;
}

module.exports = getEmployeeByName;
