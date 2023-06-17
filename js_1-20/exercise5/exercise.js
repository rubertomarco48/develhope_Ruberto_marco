const person1 = {
  firstName : "John",
  lastName : "Doe",
  age : 25
};

const person2 =  Object.assign({}, person1); 
person2.firstName = "Simon";

//Modify the property `firstName` of the `person2` in "Simon".

console.log(person1);
console.log(person2);
 
/* la proprietà firstName non cambiava
 poiche faceva riferimento allo stesso 
 blocco di memoria anche perchè 
 con l'uguaglianza non vieve creato
 un nuovo oggetto.  */