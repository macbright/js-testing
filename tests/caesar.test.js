
/* global test, expect */
/* eslint no-undef: "error" */

const caesar = require('../functions/caesar');

test('cipher encryption', () => {
  expect(caesar.encrypt('a and, b', 1)).toBe('b boe c');
  expect(caesar.encrypt('hello world', 5)).toBe('mjqqt btwqi');
});
test('cipher decryption', () => {
  expect(caesar.decrypt('b boe, c', 1)).toBe('a and b');
  expect(caesar.decrypt('mjqqt btwqi', 5)).toBe('hello world');
});