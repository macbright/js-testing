
/* global test, expect */
/* eslint no-undef: "error" */

const functions = require('./functions');

test('capitalize should Capitalize the string', () => {
  expect(functions.capitalize('you')).toBe('You');
});

test('reverseString should reverse the string', () => {
  expect(functions.reverseString('amaka')).toBe('akama');
});

test('calculate by adding two numbers', () => {
  expect(functions.calculator.add(1, 2)).toBe(3);
});

test('calculate by substracting two numbers', () => {
  expect(functions.calculator.subtract(6, 5)).toBe(1);
});

test('calculate by dividing two numbers', () => {
  expect(functions.calculator.divide(6, 2)).toBe(3);
});

test('calculate by multiplying two numbers', () => {
  expect(functions.calculator.multiply(6, 2)).toBe(12);
});

test('cipher encryption', () => {
  expect(functions.encrypt('a and, b', 1)).toBe('b boe c');
  expect(functions.encrypt('hello world', 5)).toBe('mjqqt btwqi');
});
test('cipher decryption', () => {
  expect(functions.decrypt('b boe, c', 1)).toBe('a and b');
  expect(functions.decrypt('mjqqt btwqi', 5)).toBe('hello world');
});

test('analyzeArray ', () => {
  expect(functions.analyzeArray([6, 7, 2, 5])).toEqual({
		average:5,
		min:2,
		max:7,
		length:4
		})
  
});

test('analyzeArray ', () => {
  expect(functions.analyzeArray([1,8,3,4,2,6])).toEqual({
		average: 4,
		min: 1,
		max: 8,
		length: 6
		})
  
});