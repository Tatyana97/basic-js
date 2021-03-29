const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  encrypt(message, key) {
    if (!message || !key) throw new Error;
    let res = "";
    let i = 0

  }    
  decrypt(message,key) {
    if (!message || !key) throw new Error;
    
  }
}

module.exports = VigenereCipheringMachine;
