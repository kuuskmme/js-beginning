const person = {
  firstName: "Max",
  lastName: "Cool",
  age: 35,
};

function createPerson (firstName, lastName, age) {
  return {firstName, lastName, age}
} 

console.log('firstName: ' + person.firstName, 'lastName: ' + person.lastName, 'age: ' + person.age)



// CODE BELOW IS WHAT SHOULD BE BETTER.


/* 
const person = {
  firstName: "Max",
  lastName: "Cool",
  age: 35,
};

function createPerson (firstName, lastName, age) {
  return {firstName, lastName, age}
} 

console.log(`firstName: ${person.firstName}, lastName: ${person.lastName}, age: ${person.age}`);
*/
