const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
 
  if (date === undefined) return 'Unable to determine the time of year!';
  if (!(date instanceof Date && !isNaN(date))) throw new Error('Error');
  let mon = date.getMonth()+1;
 let sesson;
 
    
 switch(mon) {
  case 3:
  case 4:
  case 5:
    return 'spring';
  case 6:
  case 7:
  case 8:
    return 'summer';
  case 9:
  case 10:
  case 11:
    return 'fall';
  default:
    return 'winter'
}

};
