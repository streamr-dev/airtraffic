'use strict'

const assert = require('assert')
const msglen = require('./')

assert.equal(msglen.LONG_MSG_BITS, 112)
assert.equal(msglen.SHORT_MSG_BITS, 56)

for (let n = 0; n < 32; n++) {
  const length = n < 16 ? msglen.SHORT_MSG_BITS : msglen.LONG_MSG_BITS
  assert.equal(msglen(n), length, 'DF ' + n + ' should be ' + length + ' bits')
}
