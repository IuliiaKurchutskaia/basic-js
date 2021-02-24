const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam( members ) {
  if(!(members instanceof Array)){
    return false;
  }
  return members.map((item) => {
    return typeof item === 'string' ? item.trim()[0].toUpperCase() : '';
  }).sort().join('');
};

