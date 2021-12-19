const { arabicToRoman } = require("./arabicToRoman");

describe("Arabic to Roman", () => {
  it("Initial test", () => {
    arabicToRoman();
  });

  it('Should return "I" when given 1', () => {
    expect(arabicToRoman(1)).toBe("I");
  });

  it('Should return "II" when given 2', () => {
    expect(arabicToRoman(2)).toBe("II");
  });
});
