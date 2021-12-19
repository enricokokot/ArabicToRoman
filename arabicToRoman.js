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

  answer = "";

  while (arabicNumber > 0) {
    goodNumber = Object.keys(romanNumerals)
      .reverse()
      .find((numero) => arabicNumber / numero >= 1);
    arabicNumber -= goodNumber;
    answer += romanNumerals[goodNumber];
  }

  return answer;
}

module.exports = { arabicToRoman };
