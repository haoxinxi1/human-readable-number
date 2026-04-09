module.exports = function toReadable(number) {
  const onesNumerals = [
    'zero',
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
  ];
  const teensNumerals = [
    'ten',
    'eleven',
    'twelve',
    'thirteen',
    'fourteen',
    'fifteen',
    'sixteen',
    'seventeen',
    'eighteen',
    'nineteen',
  ];
  const tensNumerals = [
    '',
    '',
    'twenty',
    'thirty',
    'forty',
    'fifty',
    'sixty',
    'seventy',
    'eighty',
    'ninety',
  ];
  const hundredsNumerals = [
    '',
    'one hundred',
    'two hundred',
    'three hundred',
    'four hundred',
    'five hundred',
    'six hundred',
    'seven hundred',
    'eight hundred',
    'nine hundred',
  ];
  if (number < 0 || number >= 1000)
    throw new Error('Number should be non-negative and less than 1000');
  const hundreds = Math.floor(number / 100);
  const tens = Math.floor((number % 100) / 10);
  const ones = number % 10;
  const result = [];
  if (hundreds > 0) result.push(hundredsNumerals[hundreds]);
  if (tens >= 2) result.push(tensNumerals[tens]);
  if (tens === 1) result.push(teensNumerals[ones]);
  if (tens !== 1 && tens >= 0 && ones > 0) result.push(onesNumerals[ones]);
  if (number === 0) result.push(onesNumerals[0]);
  return result.join(' ');
};
