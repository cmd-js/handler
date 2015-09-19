var asArray = require('as-array')

module.exports = function handler () {

  return {
    type: 'handler',
    value: asArray(arguments)
  }
}
