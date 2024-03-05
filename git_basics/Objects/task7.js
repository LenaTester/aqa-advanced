const person1 = { name: 'James', email: 'james@gmail.com', age: 20 };
const person2 = { name: 'Elizabeth', email: 'elizabeth@gmail.com', age: 30 };
const person3 = { name: 'JAMES', email: 'James@gmail.com', age: 20 };
const person4 = {
  name: 'James',
  email: 'james@gmail.com',
  age: 20,
  gender: 'male',
};

function keyValue(object1) {
  for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
  }
}

keyValue(person1);
