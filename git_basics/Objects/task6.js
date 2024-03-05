// comparing 2 objects

function isObjectsEqual(obj1, obj2) {
  Object.keys(obj1).forEach((key) => {
    if (typeof obj1[key] == 'string') {
      obj1[key] = obj1[key].toLowerCase();
    }
  });

  Object.keys(obj2).forEach((key) => {
    if (typeof obj1[key] == 'string') {
      obj2[key] = obj2[key].toLowerCase();
    }
  });

  const objKeys1 = Object.keys(obj1);
  const objKeys2 = Object.keys(obj2);
  if (objKeys1.length !== objKeys2.length) {
    return false;
  }

  for (const key of objKeys1) {
    if (obj1[key] !== obj2[key]) {
      return false;
    }
  }

  return true;
}

const person1 = { name: 'James', email: 'james@gmail.com', age: 20 };
const person2 = { name: 'Elizabeth', email: 'elizabeth@gmail.com', age: 30 };
const person3 = { name: 'JAMES', email: 'James@gmail.com', age: 20 };
const person4 = {
  name: 'James',
  email: 'james@gmail.com',
  age: 20,
  gender: 'male',
};

console.log(isObjectsEqual(person1, person2));
console.log(isObjectsEqual(person1, person3));
console.log(isObjectsEqual(person1, person4));
