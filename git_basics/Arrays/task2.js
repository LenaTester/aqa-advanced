// mapped array

const numbers = [1, 2, 3, 4, 5];

const indexMultipliedNumbers = numbers.map(
  (number) => number * numbers.indexOf(number),
);
console.log(indexMultipliedNumbers);
