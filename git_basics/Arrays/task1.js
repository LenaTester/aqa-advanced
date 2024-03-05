// for loop with array

const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (const element of numbers) {
  if (element > 0) {
    positiveCount += 1;
  } else if (element == 0) {
    zeroCount += 1;
  } else if (element < 0) {
    negativeCount += 1;
  }
}

console.log(`Number of positive numbers: ${positiveCount}`);
console.log(`Number of zero numbers: ${zeroCount}`);
console.log(`Number of negative numbers: ${negativeCount}`);
