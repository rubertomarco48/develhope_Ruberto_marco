function calculateAverageAge(persons) {
  // ...
  let sumAge = 0;
  for (let index = 0; index < persons.length; index++) {
    const element = persons[index];
    sumAge = sumAge + element.age;
  }
  return sumAge/persons.length;
}

const persons = [
  { name: 'Paul', age: 16 },
  { name: 'George', age: 17 },
  { name: 'Lucas', age: 21 },
  { name: 'Marco', age: 32 },
  { name: 'Peter', age: 18 },
  { name: 'Carl', age: 13 },
  { name: 'Simon', age: 24 },
  { name: 'Mark', age: 15 },
  { name: 'Sandra', age: 34 },
  { name: 'Alice', age: 28 }
];

const average = calculateAverageAge(persons);
console.log(persons);
console.log(Math.round(average));