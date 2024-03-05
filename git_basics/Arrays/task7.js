// new array with greater values

function filterGreaterThanValue(minValue, numbersList) {
  const greaterArray = [];
  for (const number of numbersList) {
    if (number > minValue) {
      greaterArray.push(number);
    }
  }

  console.log(greaterArray);
}

filterGreaterThanValue(3, [-1, 0, 1, 2, 50, 80, 101]);
