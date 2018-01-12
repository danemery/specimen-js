# specimen-js
specimen-js is a simple JavaScript type checking utility.

You can find it on npm [here](https://www.npmjs.com/package/specimen-js).

## Installation
```
npm install specimen-js
```

## Usage
```
const specimen = require('specimen-js);

specimen.isString('Hi there'); // true
specimen.isArray(new Array()); // true
specimen.isRegExp(123); // false
```