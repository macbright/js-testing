
/* global test, expect */
/* eslint no-undef: "error" */

const calculator = require('../functions/calculator');

test('calculate by adding two numbers', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('calculate by substracting two numbers', () => {
  expect(calculator.subtract(6, 5)).toBe(1);
});

test('calculate by dividing two numbers', () => {
  expect(calculator.divide(6, 2)).toBe(3);
});

test('calculate by multiplying two numbers', () => {
  expect(calculator.multiply(6, 2)).toBe(12);
});
