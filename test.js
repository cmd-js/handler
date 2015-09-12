var test = require('tape')
var use = require('./')

test('use()', function (t) {

  t.deepEqual(use(), {
    type: 'function',
    value: []
  }, 'no inputs')

  var fn1 = function () {}
  var fn2 = function () {}

  t.deepEqual(use(fn1, fn2), {
    type: 'function',
    value: [fn1, fn2]
  }, 'multiple inputs')

  t.end();
})
