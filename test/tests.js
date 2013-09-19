describe('to-constant-case', function () {

var assert = require('assert');
var constant = require('to-constant-case');

it('space case', function () {
  assert('SPACE_CASE' == constant('space case'));
});

it('camelCase', function () {
  assert('CAMEL_CASE' == constant('camelCase'));
});

it('snake_case', function () {
  assert('SNAKE_CASE' == constant('snake_case'));
});

it('dot.case', function () {
  assert('DOT_CASE' == constant('dot.case'));
});

it('weird[case', function () {
  assert('WEIRD_CASE' == constant('weird[case'));
});

});