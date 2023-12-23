const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
const deleteDigit = n => {
  const strToArr = `${n}`.split('');
  for (let i = 0; i < strToArr.length; i++) {
    if (strToArr[i] < strToArr[i + 1]) {
      strToArr.splice(i, 1);
      break;
    } else if (strToArr[i] === strToArr[i + 1]) {
      continue;
    } else {
      strToArr.splice(i + 1, 1);
      break;
    }
  };
  return +strToArr.join('');
};

module.exports = {
  deleteDigit
};