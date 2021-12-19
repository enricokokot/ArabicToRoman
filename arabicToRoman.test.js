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

  it('Should return "VI" when given 6', () => {
    expect(arabicToRoman(6)).toBe("VI");
  });

  it('Should return "VII" when given 7', () => {
    expect(arabicToRoman(7)).toBe("VII");
  });

  it('Should return "VIII" when given 8', () => {
    expect(arabicToRoman(8)).toBe("VIII");
  });

  it('Should return "IX" when given 9', () => {
    expect(arabicToRoman(9)).toBe("IX");
  });

  it('Should return "X" when given 10', () => {
    expect(arabicToRoman(10)).toBe("X");
  });
});

describe("Arabic to Roman 2", () => {
  it('Should return "XV" when given 15', () => {
    expect(arabicToRoman(15)).toBe("XV");
  });

  it('Should return "XXVIII" when given 28', () => {
    expect(arabicToRoman(28)).toBe("XXVIII");
  });

  it('Should return "XXXIX" when given 39', () => {
    expect(arabicToRoman(39)).toBe("XXXIX");
  });

  it('Should return "CDXCIX" when given 499', () => {
    expect(arabicToRoman(499)).toBe("CDXCIX");
  });

  it('Should return "MDCCCLXXXVIII" when given 1888', () => {
    expect(arabicToRoman(1888)).toBe("MDCCCLXXXVIII");
  });
});
