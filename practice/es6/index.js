// const numbers = [1, 5, 6, 12, 64, 23, 15, 11];

// function sumOfAll(...numbers) {
//   return numbers.reduce((acc, number) =>{
//  return acc + number;
//   },0 );
// }

// console.log(sumOfAll(numbers));

// const defaultColors = ["red", "green"];
// const userFavoriteColors = ["orange", "yellow"];

// // console.log(defaultColors.concat(userFavoriteColors));
// const newColors = [...defaultColors,...userFavoriteColors]

// console.log(newColors);

// const listOfItems =["eggs","cheese","bread"]

// function validateShoppingList(...items) {
//   if (items.indexOf("milk") < 0) {
//     return ["milk", ...items];
//   }
//   return items;
// }

// console.log(validateShoppingList(listOfItems));

// function product(...array) {
//     const numbers = [...array];

//     return numbers.reduce((acc, number) => acc * number,1)

//   }

// const numbersToShift = [1,6,8,2,8,]

//   function unshift(element,...array) {
//     return [element, ...array]
//   }
// const newArray = unshift(0,...numbersToShift)

// console.log(newArray)
// let and const practice
// const name = "John"
// const age = 101

// function runForLoop(pets) {
//     var petObjects = []
//     for (var i = 0; i < pets.length; i++) {
//         let pet = { type: pets[i] }
//         let name;
//         if (pets[i] === "cat") {
//             name = "fluffy"
//         } else {
//             name = "spot"
//         }
//         console.log("pet name: ", name)
//         pet.name = name
//         petObjects.push(pet)
//     }
//     console.log("man name: ", name)
//     return petObjects
// }

// runForLoop(["cat", "dog"])

// ES6 Arrow Functions

//Task 1
// Re-write this .Map using an arrow function

// const carrots = ["bright orange", "ripe", "rotten"];

// function mapVegetables(arr) {
//   return arr.map((carrot) => ({ type: "carrot", name: carrot }));
// }

// console.log(mapVegetables(carrots));

// ### **Task 2**

// Re-write this `.filter()` ’s callback function using an arrow function:

// const people = [
//   {
//     name: "Princess Peach",
//     friendly: false,
//   },
//   {
//     name: "Luigi",
//     friendly: true,
//   },
//   {
//     name: "Mario",
//     friendly: true,
//   },
//   {
//     name: "Bowser",
//     friendly: false,
//   },
// ];

// function filterForFriendly(arr) {
//   return arr.filter((person) => person.friendly);
// }

// const result = filterForFriendly(people);
// console.log(result);

// // ### **Task 3**

// Re-write the following functions to be arrow functions:
// const doMathSum = (a, b) => a+b;
// var produceProduct = (a, b) => a*b;

/*
### **Task 4**

Write a `printString` function that takes `firstName`, `lastName`, and `age` as parameters and returns a string like the following:*/
const printString = ({ firstName = "Jane", lastName = "Doe", age = 100 }) =>
  `Hi ${firstName} ${lastName} how does it feel to be ${age}?`;

/*### **Task 5**

Use the shorthand syntax to make the following filter take up one line. Copy and paste the array to test it.*/

const animals = [
  {
    type: "dog",
    name: "theodore",
  },
  {
    type: "cat",
    name: "whiskers",
  },
  {
    type: "pig",
    name: "piglette",
  },
  {
    type: "dog",
    name: "sparky",
  },
];

function filterForDogs(arr) {
  return arr.filter((animal) => animal.type === "dog");
}

console.log(filterForDogs(animals));
