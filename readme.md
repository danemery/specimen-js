# specimen-js

specimen-js is a simple JavaScript type checking utility.

## Node.js

### Installation

```
npm install specimen-js
```

### Usage

```
const Specimen = require('specimen-js');
const specimen = new Specimen();

specimen.isString('Hi there'); // true
specimen.isArray(new Array()); // true
specimen.isRegExp(123); // false
```

## Browser

### Installation

```
<script src="https://s3-us-west-2.amazonaws.com/specimen-js/specimen.js"></script>
```

### Usage

```
const specimen = new Specimen();

specimen.isString('Hi there'); // true
specimen.isArray(new Array()); // true
specimen.isRegExp(123); // false
```