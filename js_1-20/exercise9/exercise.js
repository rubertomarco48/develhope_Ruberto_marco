const person = {
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25
}
let key = Object.keys(person) ;
let values= Object.values(person);
for (let i = 0; i < key.length ;i++) {
  console.log(key[i] +": "+ values[i]);
}

// Print values of person using Object.keys