//1) Given an array of numbers, return a new array that has only the numbers that are 5 or greater.

// const numbers = [3, 6, 9, 3, 19, 8, 2, 4, 7, 11];

// function fiveAndGreater(array) {
//   return numbers.filter(function (number) {
//     if (number >= 5) {
//       return true;
//     }
//   });
// }

// console.log(fiveAndGreater(numbers));

//2) Given an array of numbers, return a new array that only includes the even numbers.
// const numbers = [5, 1, 3, 2, 4, 6, 8, 11, 24, 13];
// function evensOnly(arr) {
//   return numbers.filter(function (number) {
//     if (number % 2 === 0) {
//       return true;
//     }
//   });
// }

// console.log(evensOnly(numbers));

//3) Given an array of strings, return a new array that only includes those that are 5 characters or fewer in length

// const wordsArray = ["dog", "wolf", "by", "family", "eaten", "camping"];

// function fiveCharactersOrFewerOnly(arr) {
//   return wordsArray.filter(function (word) {
//     if (word.length <= 5) {
//       return true;
//     }
//   });
// }

// console.log(fiveCharactersOrFewerOnly(wordsArray));

//4) Given an array of people objects, return a new array that has filtered out all those who don't belong to the club.

// const people = [
//   { name: "Angelina Jolie", member: true },
//   { name: "Eric Jones", member: false },
//   { name: "Paris Hilton", member: true },
//   { name: "Kayne West", member: false },
//   { name: "Bob Ziroll", member: true },
// ];

// function peopleToCheck(arrayOfObjects){
//     return arrayOfObjects.filter(function(object){
//         if (object.member ===true) {
//             return true
//         }
//     })
// }

// console.log(peopleToCheck(people));

//5) Make a filtered list of all the people who are old enough to see The Matrix (older than 18)
// const people = [
//   { name: "Angelina Jolie", age: 80 },
//   { name: "Eric Jones", age: 2 },
//   { name: "Paris Hilton", age: 5 },
//   { name: "Kayne West", age: 16 },
//   { name: "Bob Ziroll", age: 100 },
// ];

// function ofAge(arr) {
//   return arr.filter(function (person) {
//     if (person.age >= 18) {
//       return true;
//     }
//   });
// }

// console.log(ofAge(people))

const users = [
  { name: "joe", age: 22 },
  { name: "julie", age: 32 },
  { name: "rick", age: 50 },
];
const fired = [];
const employed = [];
users.forEach((person) => person.name ==="joe" && fired.push(person));
users.forEach((person) => person.age >= 40 && employed.push(person));
console.log(fired);
console.log(employed);
