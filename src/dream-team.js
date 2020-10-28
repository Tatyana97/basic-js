const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (!Array.isArray(members)) return false;
  
  let array = [];

  members.forEach((elem) =>{
   if (typeof elem  == 'string') 
   array.push(elem.toUpperCase().trim().slice(0,1))
   });

array = array.sort().join('');
return array;

};
