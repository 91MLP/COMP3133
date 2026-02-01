const { expect } = require("chai");
const calculator = require("../app/calculator");

describe("Calculator Test", function () {

  // ADD
  it("PASS: add(5, 2) should return 7", function () {
    expect(calculator.add(5, 2)).to.equal(7);
    console.log("✅ PASS: add(5,2) = 7");
  });

  it("FAIL: add(5, 2) should not return 8", function () {
    expect(calculator.add(5, 2)).to.not.equal(8);
    console.log("❌ FAIL (expected): add(5,2) ≠ 8");
  });

  // SUB
  it("PASS: sub(5, 2) should return 3", function () {
    expect(calculator.sub(5, 2)).to.equal(3);
    console.log("✅ PASS: sub(5,2) = 3");
  });

  it("FAIL: sub(5, 2) should not return 5", function () {
    expect(calculator.sub(5, 2)).to.not.equal(5);
    console.log("❌ FAIL (expected): sub(5,2) ≠ 5");
  });

  // MUL
  it("PASS: mul(5, 2) should return 10", function () {
    expect(calculator.mul(5, 2)).to.equal(10);
    console.log("✅ PASS: mul(5,2) = 10");
  });

  it("FAIL: mul(5, 2) should not return 12", function () {
    expect(calculator.mul(5, 2)).to.not.equal(12);
    console.log("❌ FAIL (expected): mul(5,2) ≠ 12");
  });

  // DIV
  it("PASS: div(10, 2) should return 5", function () {
    expect(calculator.div(10, 2)).to.equal(5);
    console.log("✅ PASS: div(10,2) = 5");
  });

  it("FAIL: div(10, 2) should not return 2", function () {
    expect(calculator.div(10, 2)).to.not.equal(2);
    console.log("❌ FAIL (expected): div(10,2) ≠ 2");
  });

});
