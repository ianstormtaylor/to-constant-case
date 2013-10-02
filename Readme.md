# to-constant-case

  Convert a string to a constant case.

## Installation

    $ component install ianstormtaylor/to-constant-case
    $ npm install to-constant-case

## Example

```js
var constant = require('to-constant-case');

constant('camelCase');  // "CAMEL_CASE"
constant('snake_case'); // "SNAKE_CASE"
constant('dot.case');   // "DOT_CASE"
constant('weird[case'); // "WEIRD_CASE"
```

## API

### toConstantCase(string)
  
  Returns the constant-case variant of a `string`.

## License

  MIT
