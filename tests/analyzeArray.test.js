
/* global test, expect */
/* eslint no-undef: "error" */

const analyzeArray = require('../functions/analyzeArray');

test('analyzeArray ', () => {
  expect(analyzeArray([6, 7, 2, 5])).toEqual({
    average: 5,
    min: 2,
    max: 7,
    length: 4
  });
});

test('analyzeArray ', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6
  });
});