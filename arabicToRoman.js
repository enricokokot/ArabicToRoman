function arabicToRoman(arabicNumber) {
  const romanNumerals = {
    1000: "M",
    900: "CM",
    500: "D",
    400: "CD",
    100: "C",
    90: "XC",
    50: "L",
    40: "XL",
    10: "X",
    9: "IX",
    5: "V",
    4: "IV",
    1: "I",
    0: "",
  };

  romanNumber = "";

  while (arabicNumber > 0) {
    currentGreatestDivisor = Object.keys(romanNumerals)
      .reverse()
      .find((divisor) => arabicNumber / divisor >= 1);
    arabicNumber -= currentGreatestDivisor;
    romanNumber += romanNumerals[currentGreatestDivisor];
  }

  return romanNumber;
}

module.exports = { arabicToRoman };
