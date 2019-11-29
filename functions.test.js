
const functions = require('./functions');

test('capitalize should Capitalize the string', () => {
  expect(functions.capitalize('you')).toBe('You')
});

test('reverseString should reverse the string', () => {
  expect(functions.reverseString('amaka')).toBe('akama')
});
