const { arabicToRoman } = require("./arabicToRoman");

describe("Arabic to Roman", () => {
  it("Initial test", () => {
    arabicToRoman();
  });

  it('Should return "I" when given 1', () => {
    expect(arabicToRoman(1)).toBe("I");
  });
});
