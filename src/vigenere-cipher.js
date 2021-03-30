const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
  }
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
