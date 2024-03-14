// Singleton

const mySym = Symbol("key1")

// Object Literals ->

const juser ={
    name: "Kshitij",
    age:19,
    [mySym]:"mykey1",
    email: "kshitijthaw@gmail.com",
    location: "Nagpur",
    isLoggedIn: false
}

// console.log(juser);
// console.log(juser.email);
// console.log(juser["email"]);

// console.log(typeof juser[mySym])

// Object.freeze(juser)

// juser.email ="nihal@wanjari.com"
// console.log(juser["email"]);

juser.greeting = function () {
    console.log("Hello User welcome!!");
}

juser.greetingtwo = function () {
    console.log(`Hello Js user, ${this.name}`);
}

console.log(juser.greeting())
console.log(juser.greetingtwo())

