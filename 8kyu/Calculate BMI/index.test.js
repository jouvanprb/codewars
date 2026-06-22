const { assert } = require('chai');

describe("BMI tests", () => {
  it("Sample tests", () => {
    assert.strictEqual(bmi(50, 1.80), "Underweight", "For weight = 50 and height = 1.80");
    assert.strictEqual(bmi(80, 1.80), "Normal", "For weight = 80 and height = 1.80");
    assert.strictEqual(bmi(90, 1.80), "Overweight", "For weight = 90 and height = 1.80");
    assert.strictEqual(bmi(100, 1.80), "Obese", "For weight = 100 and height = 1.80");
  });
});
