const data = require('../data/zoo_data');

function isManager(id) {
  const recoverPersonById = data.employees.some((person) => person.managers.includes(id));
  return recoverPersonById;
}

function getRelatedEmployees(managerId) {
  if (isManager(managerId) === false) {
    throw new Error('O id inserido não é de uma pessoa colaboradora gerente!');
  }
  const collaboringManagers = data.employees
    .filter((managerCollaborator) => managerCollaborator.managers.includes(managerId));
  const concatResult = collaboringManagers
    .map((collaborator) => `${collaborator.firstName} ${collaborator.lastName}`);
  return concatResult;
}
module.exports = { isManager, getRelatedEmployees };
