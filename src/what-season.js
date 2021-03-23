const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  let season;

  if (date instanceof Date && Object.prototype.toString.call(date) === '[object Date]') {
    switch (date.getMonth()) {
      case 11:
      case 0:
      case 1:
        season = 'winter'
        break;
      case 2:
      case 3:
      case 4:
        season = 'spring'
        break;
      case 5:
      case 6:
      case 7:
        season = 'summer'
        break;
      case 8:
      case 9:
      case 10:
        season = 'autumn'
        break;
    }
  } else if (!arguments.length) {
    season = 'Unable to determine the time of year!';
  } else {
    throw new Error('Unable to determine the time of year!');
  }

  return season;
};
