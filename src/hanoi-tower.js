const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(discNumber, turnsSpeed) {
  const turns = (2**discNumber) - 1;
  const seconds = Math.floor((turns * 3600) / turnsSpeed);
  return {turns, seconds};
};
