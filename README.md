
# range-iterable

# Requirements

 * Node >= 6.0.0

# Features

 * Python-like `range` class for JavaScript

# Usage

## Import

```javascript
var Range = require('range-iterable'); // `Range` is a constructor, always takes 2 arguments
var {range} = Range; // `range` is a function, takes 1 or 2 arguments
```

## Basic usages

```javascript
var x0 = [...new Range(3, 7)];
var x1 = [...range(2, 5)];
var x2 = [...range(5)];
var x3 = [...range(5).map(String)];
console.log({x0, x1, x2, x3});
```

## Extra methods

```javascript
var x0 = range(5).reverse();
var x1 = range(5).shift(2);
var x2 = range(5).multiply(3);
var x3 = range(5).reverse().shift(2).multiply(3);
console.log({x0, x1, x2, x3});
```
