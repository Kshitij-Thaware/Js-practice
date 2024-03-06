//  Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

// 

/*const isLoggedIn = false
console.log(isLoggedIn);
let user;
console.log(user);
const id = Symbol('123')
const anotherid = Symbol('123')
console.log(id === anotherid);

const bigNumber = 686469493496593469n

*/
// Reference Type (Non-Primitive)
// Array, Objects, Functions

const heroes = ["Shaktiman", "Nagraj", "doga"];
let obj = {
    name:"hitedh",
    age : 22,
}

const func = function(){
    console.log("Hello World");
};
console.log(typeof bigNumber)

// Stack(Primitive Datatypes //Copy ), Heap(Non-Primitive Datatypes)

let myName = "Kshitij Thaware"
let anotherName = myName
anotherName = "Mrunal Thaware"
console.log(myName);
console.log(anotherName);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}

let userTwo = userOne
userTwo.email = "kshitij@google.com"
console.log(userOne.email);
console.log(userTwo.email);
