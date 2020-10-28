const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity !== 'string' || +sampleActivity <= 0 || isNaN(+sampleActivity)){
      return false;
  }
  
  return Math.round(
    Math.log(MODERN_ACTIVITY / +sampleActivity) / HALF_LIFE_PERIOD
  );
};
