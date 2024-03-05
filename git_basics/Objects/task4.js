// adding and deleting property

const person = {
  firstName: 'Emily',
  lastName: 'Williams',
  age: 22,
};

person.email = 'emily@gmail.com';
delete person.age;

console.log(person);
