// // Challenge 1: Sorting an Array
// const numbers = [1,8,4,7,9,6,4,2,3]
// const numbers2 = [4, 2, 7, 1, 9, 5]

// function sortNumbers(numbers) {
//     return numbers.sort()
//     }
//     //placed function in a var
//  const sortedNumbers = sortNumbers(numbers2)
// // diplay result of sorted numbers
//     console.log(sortedNumbers)

//## **Challenge 2: Mapping an Array**

// const strings = ["hello", "world", "javascript"];

// function convertToUppercase(strings) {
//     //returns the strings being mapped over
//   return strings.map(function (string) {
//     //returns the converted strings
//     return string.toUpperCase();
//   });
// }
// //saving the result into a const
// const convertedStrings = convertToUppercase(strings);
// console.log(convertedStrings);

// Write a function that takes an array of numbers and returns a new array containing only the even numbers.
const numbers = [1, 2, 3, 4, 5, 6];

function filterEvenNumbers(numbers) {
    return numbers.filter((number) => number % 2 ===0)
   

}
 console.log(filterEvenNumbers(numbers));
