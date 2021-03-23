const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {


  if(Array.isArray(members)) {
    let dreamTeam = [];

    members.forEach(el => typeof el === 'string' ? dreamTeam.push(el.trim()[0].toLocaleUpperCase()) : dreamTeam);

    return dreamTeam.sort().join('');
  }

  return false;
};
