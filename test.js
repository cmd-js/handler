var test = require('tape')
var handler = require('./')

test('handler()', function (t) {

  t.deepEqual(handler(), {
    type: 'function',
    value: []
  }, 'no inputs')

  var fn1 = function () {}
  var fn2 = function () {}

  t.deepEqual(handler(fn1, fn2), {
    type: 'function',
    value: [fn1, fn2]
  }, 'multiple inputs')

  t.end();
})
