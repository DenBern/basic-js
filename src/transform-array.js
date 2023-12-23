const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  let resultArr = arr.slice();
  if (arr.length === 0) {
    return arr;
  } else if (Array.isArray(arr) === true) {
    for (let i = 0; i < arr.length; i++) {
      if (typeof resultArr[i] == 'number') {
        resultArr;
      } else if ((resultArr[resultArr.length - 1] == '--double-next') || (resultArr[resultArr.length - 1] == '--discard-next')) {
        resultArr.pop();
      } else if ((resultArr[0] == '--double-prev') || (resultArr[0] == '--discard-prev')) {
        resultArr.shift();
      } else if (resultArr[i] == '--discard-prev') {
        resultArr.splice(i - 1, 2);
      } else if (resultArr[i] == '--discard-next') {
        if (resultArr[i + 2] == '--double-prev' || resultArr[i + 2] == '--discard-prev') {
          resultArr.splice(i, 3);
        } else if (resultArr[i + 2] !== '--double-prev') {
          resultArr.splice(i - 1, 2);
        }
      } else if (resultArr[i] == '--double-prev') {
        resultArr.splice(i, 1, resultArr[i - 1]);
      } else if (resultArr[i] == '--double-next') {
        resultArr.splice(i, 1, resultArr[i + 1]);
      }
    }
  } else {
    return "'arr' parameter must be an instance of the Array!";
  }
  return resultArr;
};

module.exports = {
  transform
};