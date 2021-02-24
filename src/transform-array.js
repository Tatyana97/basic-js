const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw new Error();
  if (arr[0] === undefined) return [];
  
  arr.forEach(element =>{
  //  console.log(element)
  
  if(element === '--discard-next'){
    let i = arr.indexOf('--discard-next');
     arr.splice (i+1, 1);
      
  } else if(element === '--double-prev'){
    let i = arr.indexOf('--double-prev');
    arr.push (arr[i-1]);
  }   else if(element === '--discard-prev'){
    let i = arr.indexOf('--discard-prev');
     arr.splice (i-1, 1);
  }
  else if(element === '--double-next'){
    let i = arr.indexOf('--double-next');
      arr.splice(i, 0, arr[i+1])
  }
  
  })
  
  return arr.filter(val => {return val !== '--discard-next' && val !== '--discard-prev' && val !== '--double-next' && val !== '--double-prev' });


};
