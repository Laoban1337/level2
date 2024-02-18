var peopleArray = [
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47,
  },
  {
    firstName: "Frank",
    lastName: "Zappa",
    age: 12,
  },
  {
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78,
  },
  {
    firstName: "Morty",
    lastName: "Smith",
    age: 29,
  },
  {
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27,
  },
  {
    firstName: "Pasha",
    lastName: "Datsyuk",
    age: 13,
  },
  {
    firstName: "Lev",
    lastName: "Tolstoy",
    age: 82,
  },
];
function sortedOfAge(arr) {
  const peopleOfAge = arr.filter((person) => person.age >= 18);
  peopleOfAge.sort((a, b) => {
    const lastNameA = (a.lastName || "").split(" ").pop();
    const lastNameB = (b.lastName|| "").split(" ").pop();
    return lastNameA.localeCompare(lastNameB);
  });
  const peopleListItems = peopleOfAge.map(
    (person) => `<li> ${person.firstName} ${person.lastName} is ${person.age} </li>`
  );
  return peopleListItems;
}


console.log(sortedOfAge(peopleArray));