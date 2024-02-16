// closure

function makeCounter(num) {
    return function () {
       return num += 5
    }
}

let closureFunction = makeCounter(5)
console.log(closureFunction())
console.log(closureFunction())
console.log(closureFunction())