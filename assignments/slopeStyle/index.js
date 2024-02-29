/*help this function return an array of animals, no matter how many animals are passed to it:*/

// function collectAnimals(...animals) {
//     return animals;
// }

// const result =  collectAnimals("dog", "cat", "mouse", "jackolope", "platypus");
// // ["dog", "cat", "mouse", "jackolope", "platypus"]

// console.log(result);

//Write a function that returns a food object with the array names as properties.
//You'll use an ES6 shorthand syntax that becomes useful when a variable name is mentioned twice
//in both the name and value of properties in your object:

// function combineFruit(fruit, sweets, vegetables) {
//   return { fruit: fruit, sweets: sweets, vegetables: vegetables };
// }

// const result = combineFruit(["apple", "pear"], ["cake", "pie"], ["carrot"]);

// console.log(result);

//Use destructuring to use the property names as variables. Destructure the object in the parameter:

// const Vacation = {
//   location: "Burly Idaho",
//   duration: "2 weeks",
// };

// function parseSentence({ location , duration }) {
//   return `We're going to have a good time in ${location} for ${duration}`;
// }

//  const result =parseSentence({
//   location: "Burly Idaho",
//   duration: "2 weeks",
// });

// console.log(result);

//Use array destructuring to make this code ES6:
const nums = [15,45,78,65,87]
function returnFirst(items){
    const [firstItem ]= items /*change this line to be es6*/
    return firstItem
}
 const result = returnFirst(nums)

console.log(result);

//Use array destructuring to make this code ES6:
// const favoriteActivities = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

// function returnFavorites(arr) {
//     const [firstFav, secondFav, thirdFav] = arr;
//     return `My top 3 favorite things are ${firstFav} and ${secondFav} and ${thirdFav}`;
// }

//  const result = returnFavorites(favoriteActivities)
//  console.log(result);
