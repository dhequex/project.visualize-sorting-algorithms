const Sort = require("../src/Sort");
const { expect } = require("chai");
const InsertionSort = require("../src/Sort");

describe("Sort", () => {
  it("should be a function", () => {
    expect(Sort).to.be.a("function");
  });
  it("should have a sort method", () => {
    expect(Sort.prototype.sort).to.be.a("function");
  });
  it("should retrieve an Array", () => {
    const sort = new InsertionSort();
    const testArray = [8, 9, 12, 13, 4, 5, 1];

    expect(sort.sort(testArray)).to.be.an("array");
  });

  it("should retrieve an Ordered Array", () => {
    const sort = new InsertionSort();
    const testArray = [8, 9, 12, 13, 4, 5, 1];
    const eval = expect(sort.sort(testArray)).to.deep.equal([
      1,
      4,
      5,
      8,
      9,
      12,
      13,
    ]);
  });
});
