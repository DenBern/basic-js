const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
const sortByHeight = arr => {
  const sortFilter = arr.filter(num => num !== -1).sort((a, b) => a - b);
  let res = [];
  let i = 0;
  arr.forEach(num => {
    if (num > 0) {
      res.push(sortFilter[i]);
      i++;
    } else {
      res.push(-1);
    };
  });
  return res;
}

module.exports = {
  sortByHeight
};