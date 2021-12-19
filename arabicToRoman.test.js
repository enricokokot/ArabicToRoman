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

  it('Should return "III" when given 3', () => {
    expect(arabicToRoman(3)).toBe("III");
  });

  it('Should return "IV" when given 4', () => {
    expect(arabicToRoman(4)).toBe("IV");
  });

  it('Should return "V" when given 5', () => {
    expect(arabicToRoman(5)).toBe("V");
  });
});
