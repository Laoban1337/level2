//1) Turn an array of numbers into a total of all the numbers
// const numbers = [1, 2, 3];

// function total(arr) {
//   // your code here
//  return arr.reduce(function (acc, num) {
//     acc += num;
//     return acc;
//   }, 0);
// }

// console.log(total(numbers));

//2) Turn an array of numbers into a long string of all those numbers.
// const numbers = [1, 2, 3];

// function stringConcat(arr) {
//   // your code here
//   return arr.reduce(function (acc, num) {

//     return acc + (String(num));
//   }, '')
// }

// console.log(stringConcat(numbers));

//3) Turn an array of voter objects into a count of how many people voted
// function totalVotes(arr) {
//   return arr.reduce(function (acc, voter) {
//     if (voter.voted) {
//       acc++;
//     }
//     return acc;
//   }, 0);
//   // your code here
// }

// var voters = [
//   { name: "Bob", age: 30, voted: true },
//   { name: "Jake", age: 32, voted: true },
//   { name: "Kate", age: 25, voted: false },
//   { name: "Sam", age: 20, voted: false },
//   { name: "Phil", age: 21, voted: true },
//   { name: "Ed", age: 55, voted: true },
//   { name: "Tami", age: 54, voted: true },
//   { name: "Mary", age: 31, voted: false },
//   { name: "Becky", age: 43, voted: false },
//   { name: "Joey", age: 41, voted: true },
//   { name: "Jeff", age: 30, voted: true },
//   { name: "Zack", age: 19, voted: false },
// ];
// console.log(totalVotes(voters));

//4) Given an array of all your wishlist items, figure out how much it would cost to just buy everything at once
// function shoppingSpree(arr) {
//     // destructuring grabing the price of the object avoided using .notation
//   return arr.reduce(function (acc, { price }) {
//     acc += price;
//     return acc;
//   }, 0);
// }

// var wishlist = [
//   { title: "Tesla Model S", price: 90000 },
//   { title: "4 carat diamond ring", price: 45000 },
//   { title: "Fancy hacky Sack", price: 5 },
//   { title: "Gold fidgit spinner", price: 2000 },
//   { title: "A second Tesla Model S", price: 90000 },
// ];

// console.log(shoppingSpree(wishlist)); // 227005

//### **5) Given an array of arrays, flatten them into a single array**

// function flatten(arr) {
//   return arr.reduce(function (acc, array) {
//     return acc.concat(array);
//   }, []);
// }

// var arrays = [["1", "2", "3"], [true], [4, 5, 6]];

// console.log(flatten(arrays));

//### **6) Given an array of potential voters, return an object representing the results of the vote**

var voters = [
  { name: "Bob", age: 30, voted: true },
  { name: "Jake", age: 32, voted: true },
  { name: "Kate", age: 25, voted: false },
  { name: "Sam", age: 20, voted: false },
  { name: "Phil", age: 21, voted: true },
  { name: "Ed", age: 55, voted: true },
  { name: "Tami", age: 54, voted: true },
  { name: "Mary", age: 31, voted: false },
  { name: "Becky", age: 43, voted: false },
  { name: "Joey", age: 41, voted: true },
  { name: "Jeff", age: 30, voted: true },
  { name: "Zack", age: 19, voted: false },
];

function voterResults(arr) {
  return arr.reduce(
    function (acc, voter) {
      if (voter.age <= 25) {
        acc.numYoungPeople++;
        if (voter.voted) {
          acc.numYoungVotes++;
        }
      } else if (voter.age <= 35) {
        acc.numMidsPeople++;
        if (voter.voted) {
          acc.numMidVotesPeople++;
        }
      } else if (voter.age >= 41) {
        acc.numOldsPeople++;
        if (voter.voted) {
          acc.numOldVotesPeople++;
        }
      }

      return acc;
    },
    {
      numYoungVotes: 0,
      numYoungPeople: 0,
      numMidVotesPeople: 0,
      numMidsPeople: 0,
      numOldVotesPeople: 0,
      numOldsPeople: 0,
    }
  );
}

console.log(voterResults(voters)); // Returned value shown below:
/*
{ numYoungVotes: 1,
  numYoungPeople: 4,
  numMidVotesPeople: 3,
  numMidsPeople: 4,
  numOldVotesPeople: 3,
  numOldsPeople: 4
}
*/
