// if else statement for checking, if there is enough goods

function checkOrder (available, ordered) {
    if (available < ordered) {
        console.log("Your order is too large, we don’t have enough goods.")}
    else if (ordered == 0) {
        console.log('Your order is empty')
    }
    else if (available > ordered) {
        console.log('Your order is accepted')
    }
}

checkOrder(1, 10)
checkOrder(1, 0)
checkOrder(10, 1)