var asArray = require('as-array')

module.exports = function handler () {

  return {
    type: 'function',
    value: asArray(arguments)
  }
}
