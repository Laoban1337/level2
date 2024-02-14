//1) Make an array of numbers that are doubles of the first array

// const numbers = [2, 5, 100];

// function doubler(array) {
//  return array.map(function (number) {
//     return number * 2;
//   });
// }

// console.log(doubler(numbers))

//2) Take an array of numbers and make them strings

// const numbers = [1,2,3,4,5,6,7]

// const result =  numbers.map(function(number){
//     return number.toString();
// })

// console.log(result)

//3) Capitalize the first letter of each name and make the rest of the characters lowercase

// const names = ["john", "JACOB", "jinGleHeimer", "schmidt"];

// function capitalizeNames(arr) {
//   return arr
//     .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
//     .join("");
// }

// console.log(capitalizeNames(names));

//4) Make an array of strings of the names

// const namesOnly = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100,
//   },
// ];

// function returnNames(arrayOfObjects) {
//   return arrayOfObjects.map(function (object) {
//     return object.name;
//   });
// }

// console.log(returnNames(namesOnly));

///5) Make an array of strings of the names saying whether or not they can go to The Matrix
// const namesOnly = [
//   {
//     name: "Angelina Jolie",
//     age: 80,
//   },
//   {
//     name: "Eric Jones",
//     age: 2,
//   },
//   {
//     name: "Paris Hilton",
//     age: 5,
//   },
//   {
//     name: "Kayne West",
//     age: 16,
//   },
//   {
//     name: "Bob Ziroll",
//     age: 100,
//   },
// ];
// function makeStrings(arr) {
//    return arr.map(function (object) {
//     if (object.age <= 18) {
//       return object.name + " Can not enter the matrix";
//     } else {
//       return object.name + " Can enter the matrix";
//     }
//   });
// }

// console.log(makeStrings(namesOnly));



const namesOnly = [
      {
        name: "Angelina Jolie",
        age: 80,
      },
      {
        name: "Eric Jones",
        age: 2,
      },
      {
        name: "Paris Hilton",
        age: 5,
      },
      {
        name: "Kayne West",
        age: 16,
      },
      {
        name: "Bob Ziroll",
        age: 100,
      },
    ];

    function elementCreator(arrayOfObjects){
         return arrayOfObjects.map(function(object ){
          return `<h1>${object.name}</h1>  <h2>${object.age}</h2>`
         })
    }

    console.log(elementCreator(namesOnly));
