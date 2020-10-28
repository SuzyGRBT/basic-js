const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  let arr = [];
  matrix.forEach(elem => arr = arr.concat(elem));

  let catsCount = 0;
  arr.forEach(el => el === "^^" ? catsCount++ : catsCount);

  return catsCount;
};
