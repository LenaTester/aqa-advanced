// using spread for merging objects

const car1 = {
    brand1: 'Toyota',
    model1: 'Camry', 
    year1: 2015
}

const car2 = {
    brand2: 'Ford',
    model2: 'Escape', 
    year2: 2017
}

const car3 = { ...car1, ...car2 }
console.log(car3)