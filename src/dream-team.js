const {
  NotImplementedError
} = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
const createDreamTeam = members =>
  !Array.isArray(members) ?
  false :
  members.filter(item => typeof item === 'string')
  .map(member =>
    member.replace(/\s/g, '')[0].toUpperCase())
  .sort().
join('');

module.exports = {
  createDreamTeam
};

module.exports = {
  createDreamTeam
};