// try catch finally

function divide (numerator, denominator) {
    if (denominator === 0) {throw Error('Division by zero is not allowed.')}
    if (typeof numerator !== 'number' || typeof denominator !== 'number') 
    {throw Error('At lease one of the arguments is not a number.')}
    console.log(numerator % denominator)
}

try {
    divide(5, 2)
} catch (error) {
    console.error(error.message)} finally {
        console.log('Work is done')
    }

try {
    divide(5, 0)
} catch (error) {
    console.error(error.message)} finally {
        console.log('Work is done')
    }

try {
    divide(5, 'Robert')
} catch (error) {
    console.error(error.message)} finally {
        console.log('Work is done')
    }