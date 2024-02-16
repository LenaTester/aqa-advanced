// callback functions

function handleEven (n) {
    if (n % 2 == 0) {
        console.log('number is even')
    }
}

function handleOdd (n) {
    if (n % 2 !== 0) {
        console.log('number is odd')
    }
}

function handleNum (num, callback1, callback2) {
    return callback1(num), callback2(num)
}

handleNum(4, handleEven, handleOdd)
handleNum(5, handleEven, handleOdd)


