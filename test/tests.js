describe('to-constant-case', function () {

var assert = require('assert');
var constant = require('to-constant-case');

it('shouldnt touch constant case', function () {
  assert('A_CONSTANT_CASE_STRING' == constant('A_CONSTANT_CASE_STRING'));
});

it('should convert space case', function () {
  assert('A_SPACE_CASE_STRING' == constant('a space case string'));
});

it('should convert camel case', function () {
  assert('A_CAMEL_CASE_STRING' == constant('aCamelCaseString'));
});

it('should convert snake case', function () {
  assert('A_SNAKE_CASE_STRING' == constant('a_snake_case_string'));
});

it('should convert dot case', function () {
  assert('A_DOT_CASE_STRING' == constant('a.dot.case.string'));
});

it('should convert title case', function () {
  assert('A_TITLE_CASE_OF_STRING' == constant('A Title: Case of String'));
});

it('should convert sentence case', function () {
  assert('A_SENTENCE_CASE_STRING' == constant('A sentence case string.'));
});

});