// sorted list

const numbersList = [1, 10, 14, 2, 4, 5, 43, 34]

const copyNumbersList = [...numbersList]

const sortedNumbersList = copyNumbersList.sort((a, b) => a - b)

console.log(numbersList)
console.log(sortedNumbersList)
