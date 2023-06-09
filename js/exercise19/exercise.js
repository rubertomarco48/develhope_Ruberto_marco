class Person {
  #firstName;
  #lastName;
  #age
  constructor(firstName,lastName,age){
    this.#firstName = firstName;
    this.#lastName = lastName;
    this.#age = age;
  }
  set firstName (newName){
    this.#firstName = newName;
  }
  set lastName (newSurname){
    this.#lastName = newSurname;
  }
  set age ( newAge){
    this.#age = newAge;
  }
  get age (){
   return this.#age;
  }
  get fullName() {
     
    return this.#firstName + " " + this.#lastName;
  }

}


const person = new Person('Mario', 'Rossi', 25);
console.log(person.fullName);
person.firstName = 'Maria';
person.lastName = 'Verdi';
console.log(person.fullName);
