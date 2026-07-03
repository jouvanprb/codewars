const { assert } = require('chai');
const pigIt = require('./index');

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pigIt('Pig latin is cool'), 'igPay atinlay siay oolcay');
    assert.strictEqual(pigIt('This is my string'), 'hisTay siay ymay tringsay');
  });
});