const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};
const json =JSON.parse(JSON.stringify(
  Object.fromEntries(
    Object.entries(person).filter(([key]) => key === "id" || key === "age")
  )
));
/* const json = JSON.parse(JSON.stringify(person));
delete json.firstName;
delete json.lastName; */
console.log(json); // Should return: { id: 1, age: 25 }

