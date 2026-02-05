/* 

Q1: -----------------------------------------------

const obj = {
  a: "foo",
  b: function () {
    console.log(this.a);
  },
};

const c = obj.b;

obj.b();
c();

Ans. obj.b() print foo because it have 'this' keyword context but when we talk about c() then it print undifined because when method assign to variable then it looses its object context, so this is no longer refers to obj.   


*/


/*

Q2: ----------------------------------------------

const str = "Lydia"
console.log([...str]);

Ans. Strings in js are iterable and spread operator works on iterables so it spread each characters of string into a new array

*/


/*

Q3: ---------------------------------------------

let user = { name: "Piyush", age: 24 };

const { name } = user;

console.log(name);

const { name: myName } = { name: "Lydia" };

console.log(name);

The output remains "Piyush" because the second destructuring assigns "Lydia" to myName, not to name because destructuring creates new variable bindings, and name: myName explicitly tells JavaScript to assign the value to myName, not to the existing name.


*/

/*


Q4: ---------------------------------------------

console.log({ a: 1 } == { a: 1 });
console.log({ a: 1 } === { a: 1 });

Ans. In both cases, we compare reference so we get false in both cases. Each object literals create a new reference in memory and JS compare references.


*/

/*


Q5: ----------------------------------------------

let person = { name: 'Lydia' };
const members = [person]

person = null;

console.log(members);


// console.log(person === members);

Ans. Objects are stored by reference and variable points to them means at first person variable is created which pointing to { name: 'Lydia' } and then members is an array and members[0] is copy person which pointing to object which means members[0] is pointing to object so when we change reassign null to person it just changes it reference but not affect the object that created.

*/
