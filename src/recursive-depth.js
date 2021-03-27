const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    if(arr.some(el => Array.isArray(el))) {
      arr = arr.flat();
      return this.calculateDepth(arr) + 1;
    }

    return 1;
  }
};