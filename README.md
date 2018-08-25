# promise-do-until [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url]

[![Greenkeeper badge](https://badges.greenkeeper.io/busterc/promise-do-until.svg)](https://greenkeeper.io/)

> Calls a function repeatedly until a condition returns true and then resolves the promise

- See Also
  - [promise-until](https://github.com/busterc/promise-until)
  - [promise-whilst](https://github.com/sindresorhus/promise-whilst)
  - [promise-do-whilst](https://github.com/busterc/promise-do-whilst)

## Installation

```sh
$ npm install --save promise-do-until
```

## Usage

```js
import promiseDoUntil from 'promise-do-until';

let count = 0;

promiseDoUntil(() => {
  count++;
}, () => {
  return count === 5;
}).then(() => {
  console.log(count);
  // => 5
});

// ...

let max = 0;

promiseDoUntil(() => {
  max++;
}, () => {
  return max > -1;
}).then(() => {
  console.log(max);
  // => 1
});

```

## API

### promiseDoUntil(action, condition)

Executes `action` repeatedly until `condition` returns `true` and then resolves the promise. Rejects if `action` returns a promise that rejects or if an error is thrown anywhere.

#### action

Type: `function`

Action to run for each iteration.

You can return a promise and it will be handled.

#### condition

Type: `function`

Should return a boolean of whether to continue.

## License

ISC © [Buster Collings]()


[npm-image]: https://badge.fury.io/js/promise-do-until.svg
[npm-url]: https://npmjs.org/package/promise-do-until
[travis-image]: https://travis-ci.org/busterc/promise-do-until.svg?branch=master
[travis-url]: https://travis-ci.org/busterc/promise-do-until
[daviddm-image]: https://david-dm.org/busterc/promise-do-until.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/busterc/promise-do-until
