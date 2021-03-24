const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  let transformedArr = [];

  if (!Array.isArray(arr)) {
    throw new Error('Input parameter should be Array');
  } else {
    for(let i = 0; i < arr.length; ) {

      switch (true) {
        case (arr[i] === '--discard-next'):
          if (arr[i + 2] === '--discard-prev' || arr[i + 2] === '--double-prev') {
            i += 3;
          } else {
            i += 2;
          }
          break;
        case (arr[i] == '--double-next'):
          if (arr[i + 1] !== undefined) {
            transformedArr.push(arr[i + 1]);
          }
          i++;
          break;
        case (arr[i] === '--discard-prev'):
          if(arr[i - 1] !== undefined) {
            transformedArr.pop();
          }
          i++;
          break;
        case (arr[i] === '--double-prev'):
          if(arr[i - 1] !== undefined) {
            transformedArr.push(transformedArr[transformedArr.length - 1]);
          }
          i++;
          break;
        default:
          transformedArr.push(arr[i]);
          i++;
      }
    }

    return transformedArr;
  }
};
