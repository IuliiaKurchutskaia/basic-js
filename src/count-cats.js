const CustomError = require("../extensions/custom-error");

module.exports = function countCats( matrix ) {
 // throw new CustomError('Not implemented');
  // remove line with error and write your code here
 
  let arr = [].concat(...matrix);
  let res=arr.filter(item => item==="^^").length;
 if(res==0){
   return 0;
 }

  return res;

};
