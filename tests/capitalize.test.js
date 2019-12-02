
/* global test, expect */
/* eslint no-undef: "error" */

const capitalize = require('../functions/capitalize');

test('capitalize should Capitalize the string', () => {
  expect(capitalize('you')).toBe('You');
});
