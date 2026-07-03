const booleanToString = require('./index')
const { assert } = require('chai');

describe("Tests", () => {
  it("test", () => {
assert.strictEqual(booleanToString(true), "true", 'When we pass in true, we want the string "true" as output');
assert.strictEqual(booleanToString(false), "false", 'When we pass in false, we want the string "false" as output');
  });
});
