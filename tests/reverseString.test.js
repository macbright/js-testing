
/* global test, expect */
/* eslint no-undef: "error" */

const reverseString = require('../functions/reverseString');

test('reverseString should reverse the string', () => {
  expect(reverseString('amaka')).toBe('akama');
});
