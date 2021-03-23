const CustomError = require("../extensions/custom-error");
module.exports = function countCats(matrix) {
  let catsCount = 0;

  // matrix.flat().forEach(el => el === '^^' ? catsCount++ : catsCount);

  matrix.forEach(el => {
    el.forEach(el => el === '^^' ? catsCount++ : catsCount)
  });

  return catsCount;
};
