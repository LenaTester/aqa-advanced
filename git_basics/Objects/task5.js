// for .. of - printing and destructuring

const persons = [
  { name: 'James', email: 'james@gmail.com', age: 20 },
  { name: 'Elizabeth', email: 'elizabeth@gmail.com', age: 30 },
  { name: 'Joseph', email: 'joseph@gmail.com', age: 40 },
];

// iteration and printing objects
for (const person of persons) {
  console.log(person);
}

// destructuring
for (const { name, email, age = person } of persons) {
  console.log(name, email, age);
}
