# mode-s-msglen

A utility library for getting the message length of Mode S messages
based on the downlink format.

Mode S is an aviation transponder interrogation mode used by Secondary
Surveillance Radar (SSR) and Automatic Dependent Surveillance-Broadcast
(ADS-B) systems.

For an example of this module in use, see
[AirplaneJS](https://github.com/watson/airplanejs).

[![Build status](https://travis-ci.org/watson/mode-s-msglen.svg?branch=master)](https://travis-ci.org/watson/mode-s-msglen)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

## Installation

```
npm install mode-s-msglen --save
```

## Usage

```js
const msglen = require('mode-s-msglen')

const msgbits = msglen(17)

if (msgbits === msglen.LONG_MSG_BITS) {
  console.log('This is a long message')
} else {
  console.log('This is a short message')
}
```

## API

### Constants

- `LONG_MSG_BITS`
- `SHORT_MSG_BITS`

### `len = msglen(type)`

Given the Downlink Format (DF) of the Mode S message, return the message
length in bits.

## License

MIT
