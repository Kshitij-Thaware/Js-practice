const marvel_heroes = ["IronMan", "Thor", "Spiderman", "Hulk"]
const dc_heroes = ["Batman", "Superman", "Flash", "Arrow"]

// marvel_heroes.push(dc_heroes)

// console.log(marvel_heroes)
// console.log(marvel_heroes[4][3])

 const heroes = marvel_heroes.concat(dc_heroes)
// console.log(heroes)

const allnew = [...dc_heroes, ...marvel_heroes]
console.log(allnew);

const another_array = [1,2,3,[4,5,6],7,[8,6,5,[7,3,2,[6,4,8]]],4,6]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("Lokesh"))
console.log(Array.from("Lokesh"))
console.log(Array.isArray({name : "lokesh",}))  //case

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));

