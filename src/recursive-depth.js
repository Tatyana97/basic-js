const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(!Array.isArray(arr)) return 0;
    arr = arr.filter((elem) => Array.isArray(elem));
    return 1 + arr.reduce((deep, item) => Math.max(deep, this.calculateDepth(item)), 0);

  }
};