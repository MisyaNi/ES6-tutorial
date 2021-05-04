import Teacher, { promote } from "./teacher";
import react, { Component } from 'react';
//ECMO Script 6 Tutorial: https://www.youtube.com/watch?v=NCwa_xi0Uuc

//1. var -> function

// function sayHello() {
//   for (let i = 0; i < 5; i++) {
//     console.log(i);
//   }
//   console.log(i);
// }

// sayHello();

//2. let -> block , accesible inside the block, use when to re-assign the variable
//3. const -> block , accesible inside the block

// const x = 1;
// let y = 1;
// y = 2;

//4. object

const person = {
  name: 'Mosh',
  walk() { },
  talk() { },
};

person.talk();
person.name = '';

const targetMember = 'name';
person[targetMember.value] = 'John';

//5. this keyword
//6.Binding this

const people = {
  name: 'Misya',
  walk() {
    console.log(this);
  }
};

people.walk();

const walk = people.walk.bind(people);
walk();


//7. Arrow functions

//old javascript
// const square = function (number) {
//   return number * number;
// }

//with single parameter
const square = number => number * number;
console.log(square(5));


//no parameter
// const square = () => {
//   return number * number;
// }
//example

const jobs = [
  { id: 1, isActive: true },
  { id: 2, isActive: true },
  { id: 3, isActive: false },
];

// const activeJobs = jobs.filter(function (job) { return job.isActive; });
const activeJobs = jobs.filter(job => job.isActive);

//8. Arrow functions and this

const p = {
  talk() {
    var self = this;
    setTimeout(() => {
      console.log("this", this);
    }, 1000);
  }
};

p.talk();

//9. Arrow.map() - to render list

const colors = ["red", "green", "blue"];
const items = colors.map(color => `<li>${color}</li>`);
console.log(items);

//10. Object Destructuring

const address = {
  street: '',
  city: '',
  country: '',
}

const { street, city, country } = address; // call all
const { street: st } = address; //call as diff name

//11. Spread Operator

//for array
const first = [1, 2, 3];
const second = [4, 5, 6];

const combined = [...first, 'a', ...second];
console.log(combined);

const clone = [...first];
console.log(first);
console.log(clone);

//for object
const firstObj = { name: 'Misya' };
const secondObj = { job: 'Programmer' };

const combinedObj = { ...firstObj, ...secondObj, location: 'PJ' };
console.log(combinedObj);

//12. Classes

// class Ppl {

//   constructor(name) {
//     this.name = name;
//   }

//   walk() {
//     console.log("walk");
//   }
// }

// const ppl = new Ppl('Misya');
// ppl.walk();

//13. Inheritance

// class Teacher extends Ppl {

//   constructor(name, degree) {
//     super(name);
//     this.degree = degree;
//   }

//   teach() {
//     console.log("teach");
//   }
// }

// const teacher = new Teacher('Misya', 'MSc');

//14. Modules
// import { Teacher } from "./teacher";

const teacher = new Teacher('Misya', 'MSc');
teacher.teach();

//15. Named and Default Exports

// import Teacher, { promote } from "./teacher";

//add default in teacher.js

