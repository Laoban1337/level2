// const names = ["Jack", "John", "Jill", "Joseph", "Jackie", "Steve"];

// const result = names.some(name => name[0]==="J") 

// console.log(result);


const heroes =[
  
  {
    name:"Spider-Man",
    age: 28,
    team:"solo",
    city: "New york city"
    
  },
  {
    name:"Wolverine",
    age:102,
    team:"X-men",
    city:"Some where in Canada"
  },
  {
    name:"Black Panther",
    age:35,
    team:" Avengers",
    city:" Wakanda"
  },
  {
    name:"Venom",
    age:37,
    team:" solo",
    city: "New York City"
  }

    
];

// const resultOfSome = heroes.some(hero => hero.name[0]==="B" || hero.name[0]==="P")
const result = heroes.every(heroe => heroe.age >20)
console.log(result);