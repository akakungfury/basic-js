const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options ) {
  const baseString = str,
    repeatTimes = options.repeatTimes,
    separator = options.separator || '+',
    addition = options.addition,
    additionRepeatTimes = options.additionRepeatTimes,
    additionSeparator = options.additionSeparator || '|';
  let finalAdditionalString = '';
  let finalBaseString = ''
  let finalString = '';

  if (addition !== undefined) {
    finalAdditionalString = `${addition}`;
    if (additionRepeatTimes !== undefined && typeof additionRepeatTimes === 'number' && additionRepeatTimes >= 2) {
      finalAdditionalString = finalAdditionalString.concat(additionSeparator);
      finalAdditionalString = finalAdditionalString.repeat(additionRepeatTimes - 1).concat(addition);
    }
  }

  finalBaseString =`${baseString}${finalAdditionalString}`;
  if (repeatTimes !== undefined && typeof repeatTimes === 'number' && repeatTimes >= 2) {
    finalBaseString = finalBaseString.concat(separator);
    return finalString.concat(finalBaseString.repeat(repeatTimes - 1), baseString, finalAdditionalString);
  } else {
    return finalBaseString;
  }
};
