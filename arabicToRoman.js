function arabicToRoman(arabicNumber) {
  const romanNumerals = { 1: "I", 2: "II", 3: "III", 4: "IV", 5: "V" };
  return romanNumerals[arabicNumber];
}

module.exports = { arabicToRoman };
