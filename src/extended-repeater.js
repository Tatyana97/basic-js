const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, { repeatTimes = 1, separator = "+", addition = "", additionRepeatTimes = 1, additionSeparator = "|" }) {

  if (str === null) str = 'null';
  if (addition === null) addition = 'null';
  
let result= "";

if (addition == undefined){
    for (let i = 0; i < repeatTimes; i++) {
      result += str;
      if (i == repeatTimes - 1) {
					continue;
      }
      result += separator;
    }
    console.log(result);
}

    
let additionStr1= "";

   if (addition !== undefined || addition !== null) {

    additionStr = [];
                addition = addition.toString();
             
  for (i = 0; i < additionRepeatTimes; i++) {
    additionStr.push(addition);
    if (i !== additionRepeatTimes - 1) {
      additionStr.push(additionSeparator);
    }
    additionStr1 =  additionStr.join("");
  }
     /* console.log(additionStr1) */;
     for (let i = 0; i < repeatTimes; i++) {
       result = result + str + additionStr1 
             if (i == repeatTimes - 1) {
					continue;
      }
      result += separator;   
     }
    
}
return result
// console.log(result);  
};


  